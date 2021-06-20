import { ApiProperty } from "@nestjs/swagger";

export class CreateAccountRequest{

    @ApiProperty()
    name: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    email: string;
    @ApiProperty({description: "Role ID",example: "Role ID"})
    role: string;
}