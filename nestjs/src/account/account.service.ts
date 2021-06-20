import { Dependencies, Injectable, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { Account } from './Account.entity';
import { IAccountService } from './account.service.interface';
import { CreateAccountRequest } from './dto/request/create-account.request';
import { hash, compare, compareSync } from 'bcrypt';
import { Role } from 'src/role/Role.entity';
import { UpdateAccountRequest } from './dto/request/update-account.request';
import { v4 as uuidV4 } from 'uuid';
import { AccountResponse } from './dto/response/account.response';
import { LoginRequest } from './dto/request/login-request.dto';
import { LoginResponse } from './dto/response/login.response';
import { JwtService } from '@nestjs/jwt';
import { AuthorizationGuard } from 'src/guard/authorization.guard';


@Injectable()
export class AccountService implements IAccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    private readonly jwtService: JwtService,
  ) {}

  async save(
    createAccountRequest: CreateAccountRequest,
    requester: string,
  ): Promise<void> {
    const account = new Account();
    account.id = uuidV4();
    account.email = createAccountRequest.email;
    account.name = createAccountRequest.name;
    account.password = await hash(createAccountRequest.password, 10);
    account.role = await this.roleRepository
      .findOneOrFail(createAccountRequest.role)
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });

    // account.createdBy = await (await this.accountRepository.findOneOrFail(requester).catch((err) => {throw new InternalServerErrorException(err)})).id;
    account.createdBy = 'SYSTEM';
    account.createdDate = new Date();

    this.accountRepository.save(account);
  }

  async update(
    updateAccountRequest: UpdateAccountRequest,
    id: string,
    requester: string,
  ): Promise<void> {
    const account = await this.accountRepository
      .findOneOrFail(id)
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });
    account.email = updateAccountRequest.email;
    account.name = updateAccountRequest.name;
    account.password = await hash(updateAccountRequest.password, 10);

    await this.accountRepository.save(account);
  }

  async delete(id: string): Promise<void> {
    const account = await await this.accountRepository
      .findOneOrFail(id)
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });

    await this.accountRepository.remove(account);
  }

  async findAll(): Promise<AccountResponse[]> {
    const response = (
      await this.accountRepository.find({ relations: ['role'] })
    ).map((v, i) => {
      var res = new AccountResponse();
      res.id = v.id;
      res.email = v.email;
      res.name = v.name;
      res.password = v.password;
      res.role = v.role.name;

      return res;
    });

    return response;
  }

  async findById(id: string): Promise<AccountResponse> {
    var account = await this.accountRepository
      .findOneOrFail(id, { relations: ['role'] })
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });
    var response = new AccountResponse();
    response.id = account.id;
    response.email = account.email;
    response.name = account.name;
    response.password = account.password;
    response.role = account.role.name;

    return response;
  }

  async login(req: LoginRequest): Promise<LoginResponse> {
    var account = await this.accountRepository.findOneOrFail({
      where: {
        email: req.email,
      },
      relations: ["role"]
    }).catch((err) => {
      throw new InternalServerErrorException(err);
      
    });

    if (account == undefined) {
      throw new InternalServerErrorException('Akun Tidak Valid');
    }

    if (compareSync(req.password, account.password) == false) {
      throw new InternalServerErrorException('Login Gagal');
    }

    try {
      const payload = { name: account.name, email: account.email, role: account.role.name  };

    var response = new LoginResponse();
    response.access_token = this.jwtService.sign(payload);
    response.role = account.role.name;
    response.name = account.name;
    return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
      
    }
    
  }
}
