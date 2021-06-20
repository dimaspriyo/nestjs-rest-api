import { ApiProperty } from "@nestjs/swagger";
import { CreateBarangMasukItemRequest } from "src/barang-masuk-item/dto/request/create-barang-masuk-item.request";

export class CreateBarangMasukRequest{

    @ApiProperty()
    name: string;

    @ApiProperty({type: CreateBarangMasukItemRequest})
    barang_masuk_item: CreateBarangMasukItemRequest[];
}