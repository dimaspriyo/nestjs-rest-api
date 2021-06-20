import { ApiProperty } from "@nestjs/swagger";
import { AccountResponse } from "src/account/dto/response/account.response";

export class findAccountByIDSwaggerResponse{
    @ApiProperty()
    status: boolean = false;

    @ApiProperty({isArray: true})
    data: AccountResponse;

    @ApiProperty()
    message: string;
}