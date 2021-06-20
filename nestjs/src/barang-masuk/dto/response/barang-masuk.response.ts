import { ApiProperty } from "@nestjs/swagger";
import { BarangMasukItemResponse } from "src/barang-masuk-item/dto/response/barang-masuk-item.response";

export class BarangMasukResponse{

    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty({isArray: true})
    barang_masuk_item: BarangMasukItemResponse[];
}