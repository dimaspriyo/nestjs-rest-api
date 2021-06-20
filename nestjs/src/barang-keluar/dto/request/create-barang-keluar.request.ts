import { ApiProperty } from "@nestjs/swagger";
import { CreateBarangKeluarItemRequest } from "src/barang-keluar-item/dto/request/create-barang-keluar-item.request";

export class CreateBarangKeluarRequest{
    @ApiProperty()
    name: string;

    @ApiProperty({type: CreateBarangKeluarItemRequest})
    barang_keluar_item: CreateBarangKeluarItemRequest[];
}