import { LoginRequest } from "src/account/dto/request/login-request.dto";
import { CreateRoleRequest } from "./dto/request/create-role.request";
import { UpdateRoleRequest } from "./dto/request/update-role.request";
import { RoleResponse } from "./dto/response/role.response";

export const ROLE_SERVICE = 'ROLE_SERVICE'; 

export interface IRoleService {

    save(createAccountRequest: CreateRoleRequest, requester: string): Promise<void>;

    update(updateAccountRequest: UpdateRoleRequest, id: string, requester: string): Promise<void>;

    delete(id: string): Promise<void>;

    findAll(): Promise<RoleResponse[]>;

    findById(id: string): Promise<RoleResponse>;


}