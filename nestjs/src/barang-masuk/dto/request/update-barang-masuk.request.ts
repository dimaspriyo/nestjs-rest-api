import { ApiProperty } from "@nestjs/swagger";
import { UpdateBarangMasukItemRequest } from "src/barang-masuk-item/dto/request/update-barang-masuk-item.request";

export class UpdateBarangMasukRequest{
    @ApiProperty()
    name: string;

    @ApiProperty({type: UpdateBarangMasukItemRequest})
    barang_masuk_item: UpdateBarangMasukItemRequest[];
}