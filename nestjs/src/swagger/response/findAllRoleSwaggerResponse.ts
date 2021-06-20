import { ApiProperty } from "@nestjs/swagger";
import { RoleResponse } from "src/role/dto/response/role.response";

export class findAllRoleSwaggerResponse{
    @ApiProperty()
    status: boolean = false;

    @ApiProperty({isArray: true})
    data: RoleResponse;

    @ApiProperty()
    message: string;
}