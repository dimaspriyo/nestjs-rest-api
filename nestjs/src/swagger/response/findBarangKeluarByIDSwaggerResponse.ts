import { ApiProperty } from "@nestjs/swagger";
import { BarangMasukResponse } from "src/barang-masuk/dto/response/barang-masuk.response";

export class findBarangKeluarByIDSwaggerResponse{
    @ApiProperty()
    status: boolean = false;

    @ApiProperty()
    data: BarangMasukResponse;

    @ApiProperty()
    message: string;
}