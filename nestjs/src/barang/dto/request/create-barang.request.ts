import { ApiProperty } from "@nestjs/swagger";

export class CreateBarangRequest{
    @ApiProperty()
    nama: string;

    @ApiProperty()
    jumlah: number;

    @ApiProperty()
    keterangan: string;

    @ApiProperty({description: "Satuan ID", example: "Satuan ID"})
    satuan: string;
}