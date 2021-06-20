import { ApiProperty } from "@nestjs/swagger";

export class BaseResponse {

    @ApiProperty()
    status: boolean = false;

    @ApiProperty()
    data: Object;

    @ApiProperty()
    message: string;

}