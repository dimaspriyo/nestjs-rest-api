

import { ApiProperty } from "@nestjs/swagger";
import { RoleResponse } from "src/role/dto/response/role.response";

export class findRoleByIDSwaggerResponse{
    @ApiProperty()
    status: boolean = false;

    @ApiProperty()
    data: RoleResponse;

    @ApiProperty()
    message: string;
}