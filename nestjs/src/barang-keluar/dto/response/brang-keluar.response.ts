import { ApiProperty } from "@nestjs/swagger";
import { BarangKeluarItemResponse } from "src/barang-keluar-item/dto/response/barang-keluar.item.response";

export class BarangKeluarReseponse{

    @ApiProperty()
    id: string;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    barang_keluar_item: BarangKeluarItemResponse[];
}