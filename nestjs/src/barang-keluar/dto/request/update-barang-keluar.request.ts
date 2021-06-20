import { ApiProperty } from "@nestjs/swagger";
import { BarangKeluarItem } from "src/barang-keluar-item/BarangKeluarItem.entity";
import { UpdateBarangKeluarItemRequest } from "src/barang-keluar-item/dto/request/update-barang-keluar-item.request";

export class UpdateBarangKeluarRequest{
    @ApiProperty()
    name: string;

    @ApiProperty({type: UpdateBarangKeluarItemRequest})
    barang_keluar_item: UpdateBarangKeluarItemRequest[];
}