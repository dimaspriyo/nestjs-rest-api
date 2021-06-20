import { ApiProperty } from "@nestjs/swagger";

export class BarangResponse{
    @ApiProperty()
    id: string;

    @ApiProperty()
    nama: string;

    @ApiProperty()
    jumlah: Number;

    @ApiProperty()
    keterangan: string;

    @ApiProperty({description: "Satuan ID", example: "Satuan ID"})
    satuan: string;
}