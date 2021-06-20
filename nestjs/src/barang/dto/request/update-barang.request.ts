import { ApiProperty } from "@nestjs/swagger";

export class UpdateBarangRequest {
    @ApiProperty()
    nama: string;

    @ApiProperty()
    jumlah: number;

    @ApiProperty()
    keterangan: string;

    @ApiProperty()
    satuan: string;
}