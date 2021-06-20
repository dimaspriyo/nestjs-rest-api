import { ApiProperty } from "@nestjs/swagger";
import { AccountResponse } from "src/account/dto/response/account.response";

export class findAllAccountSwaggerResponse{
    @ApiProperty()
    status: boolean = false;

    @ApiProperty()
    data: AccountResponse;

    @ApiProperty()
    message: string;
}