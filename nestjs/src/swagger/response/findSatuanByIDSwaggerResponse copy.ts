import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "src/BaseResponse";
import { SatuanResponse } from "src/satuan/dto/response/satuan.response";

export class findSatuanByIDSatuanSwaggerResponse {
    @ApiProperty()
    status: boolean = false;

    @ApiProperty({isArray: true})
    data: SatuanResponse;

    @ApiProperty()
    message: string;
}
