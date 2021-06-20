import { ApiProperty } from "@nestjs/swagger";

export class BarangKeluarItemResponse{

    @ApiProperty()
    id: string;

    @ApiProperty()
    jumlah: number;

    @ApiProperty({description: "Satuan ID", example: "Satuan ID"})
    satuan: string;

    @ApiProperty({description: "Barang ID", example: "Barang ID"})
    barang: string;

    @ApiProperty({description: "Barang Keluar ID", example: "Barang Keluar ID"})
    barang_keluar: string;
}