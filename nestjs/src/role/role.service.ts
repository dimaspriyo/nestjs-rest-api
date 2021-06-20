import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleRequest } from './dto/request/create-role.request';
import { UpdateRoleRequest } from './dto/request/update-role.request';
import { Role } from './Role.entity';
import { IRoleService } from './role.service.interface';
import { v4 as uuidv4 } from 'uuid';
import { RoleResponse } from './dto/response/role.response';

@Injectable()
export class RoleService implements IRoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async save(createRoleRequest: CreateRoleRequest, requester: string): Promise<void> {
    const role = new Role();
    role.id = uuidv4();
    role.name = createRoleRequest.name;

     this.roleRepository.save(role);
  }

  async update(
    updateRoleRequest: UpdateRoleRequest,
    id: string,
    requester: string,
  ): Promise<void>{
    const role = await this.roleRepository.findOneOrFail(id).catch((err) => {
      throw new InternalServerErrorException(err);
    });
    role.name = updateRoleRequest.name;
     await this.roleRepository.save(role);
  }

  async delete(id: string): Promise<void> {
    const role = await this.roleRepository.findOneOrFail(id).catch((err) => {
      throw new InternalServerErrorException(err);
    });
    await this.roleRepository.remove(role);
  }

  async findAll(): Promise<RoleResponse[]> {
    var response = (await this.roleRepository.find()).map((v, i) => {
      var res = new RoleResponse();
      res.id = v.id;
      res.name = v.name;

      return res;
    });

    return response;
  }

  async findById(id: string): Promise<RoleResponse> {
    var response = new RoleResponse();
    var role = await this.roleRepository.findOneOrFail(id).catch((err) => {
      throw new InternalServerErrorException(err);
    });
    response.id = role.id;
    response.name = role.name;
    return response;
  }
}
