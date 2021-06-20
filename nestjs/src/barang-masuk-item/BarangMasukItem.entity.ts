import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Barang } from "../barang/Barang.entity";
import { BarangMasuk } from "../barang-masuk/BarangMasuk.entity";
import { Satuan } from "src/satuan/Satuan.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: 'barang_masuk_item'})
export class BarangMasukItem {

    @PrimaryColumn({name: 'id', type:'varchar'})
    id: string;

    @ApiProperty({description: "Barang ID"})
    @ManyToOne(()=>Barang, barang => barang.barangMasukItem)
    @JoinColumn({name: 'id_barang'})
    barang: Barang;

    @ApiProperty({description: "Barang Masuk ID"})
    @ManyToOne(()=>BarangMasuk, barangMasuk => barangMasuk.barangMasukItem)
    @JoinColumn({name: 'id_barang_masuk'})
    barangMasuk: BarangMasuk;

    @Column({name: 'jumlah', type:'int8'})
    jumlah: number;

    @ApiProperty({description: "Satuan ID"})
    @ManyToOne(()=>Satuan)
    @JoinColumn({name: 'id_satuan', referencedColumnName: 'id'})
    satuan: Satuan;

}