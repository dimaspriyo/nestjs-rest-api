import { Account } from "./Account.entity";
import { CreateAccountRequest } from "./dto/request/create-account.request";
import { LoginRequest } from "./dto/request/login-request.dto";
import { UpdateAccountRequest } from "./dto/request/update-account.request";
import { AccountResponse } from "./dto/response/account.response";
import { LoginResponse } from "./dto/response/login.response";

export const ACCOUNT_SERVICE = 'ACCOUNT_SERVICE';

export interface IAccountService {

    save(createAccountRequest: CreateAccountRequest, requester: string): Promise<void>;

    update(updateAccountRequest: UpdateAccountRequest, id: string, requester: string): Promise<void>;

    delete(id: string): Promise<void>;

    findAll(): Promise<AccountResponse[]>;

    findById(id: string): Promise<AccountResponse>;

    login(req: LoginRequest): Promise<LoginResponse>;
}