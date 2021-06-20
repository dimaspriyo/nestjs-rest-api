import { ApiProperty } from "@nestjs/swagger";
import { BarangMasukResponse } from "src/barang-masuk/dto/response/barang-masuk.response";

export class findBarangMasukByIDSwaggerResponse{
    @ApiProperty()
    status: boolean = false;

    @ApiProperty()
    data: BarangMasukResponse;

    @ApiProperty()
    message: string;
}