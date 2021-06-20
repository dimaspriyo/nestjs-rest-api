import { SerializeOptions } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class LoginResponse {
    @ApiProperty()
    access_token: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    role: string;
}