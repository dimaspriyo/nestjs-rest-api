import { ApiProperty } from "@nestjs/swagger";

export class UpdateBarangMasukItemRequest {
    @ApiProperty()
    jumlah: number;

    @ApiProperty()
    satuan: string;

    @ApiProperty()
    barang: string;

    @ApiProperty()
    barang_masuk: string;
}