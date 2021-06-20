import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "src/BaseResponse";
import { SatuanResponse } from "src/satuan/dto/response/satuan.response";

export class findAllSatuanSwaggerResponse {
    @ApiProperty()
    status: boolean = false;

    @ApiProperty()
    data: SatuanResponse;

    @ApiProperty()
    message: string;
}
