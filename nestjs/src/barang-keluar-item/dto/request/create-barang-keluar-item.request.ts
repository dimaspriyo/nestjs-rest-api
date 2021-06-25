import { ApiProperty } from "@nestjs/swagger";

export class CreateBarangKeluarItemRequest{

    @ApiProperty()
    jumlah: number;

    @ApiProperty({description: "Barang ID", example: "Barang ID"})
    barang: string;
}