import { ApiProperty } from "@nestjs/swagger";

export class UpdateBarangKeluarItemRequest{

    @ApiProperty()
    jumlah: number;

    @ApiProperty()
    satuan: string;

    @ApiProperty()
    barang: string;

    @ApiProperty()
    barang_keluar: string;
}