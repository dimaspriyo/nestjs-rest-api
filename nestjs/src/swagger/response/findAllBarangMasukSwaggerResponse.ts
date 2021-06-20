import { ApiProperty } from "@nestjs/swagger";
import { BarangMasukResponse } from "src/barang-masuk/dto/response/barang-masuk.response";

export class findAllBarangMasukSwaggerResponse{
    @ApiProperty()
    status: boolean = false;

    @ApiProperty({isArray: true})
    data: BarangMasukResponse;

    @ApiProperty()
    message: string;
}