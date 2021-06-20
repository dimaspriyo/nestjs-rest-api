import { ApiProperty } from "@nestjs/swagger";

export class BarangMasukItemResponse{

    @ApiProperty()
    id: string;

    @ApiProperty()
    jumlah: number;

    @ApiProperty({description: "Satuan ID", example: "Satuan ID"})
    satuan: string;

    @ApiProperty({description: "Barang ID", example: "Barang ID"})
    barang: string;

    @ApiProperty({description: "Barang Masuk ID", example: "Barang Masuk ID"})
    barang_masuk: string;
}