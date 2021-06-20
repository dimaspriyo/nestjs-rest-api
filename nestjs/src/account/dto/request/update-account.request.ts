import { ApiProperty } from "@nestjs/swagger";

export class UpdateAccountRequest {
    @ApiProperty()
    name: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    email: string;
}