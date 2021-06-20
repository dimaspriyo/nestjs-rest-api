import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Barang } from "../barang/Barang.entity";
import { BarangKeluar } from "../barang-keluar/BarangKeluar.entity";
import { Satuan } from "src/satuan/Satuan.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: 'barang_keluar_item'})
export class BarangKeluarItem {

    @PrimaryColumn({name: 'id', type:'varchar'})
    id: string;

    @ApiProperty({description: "Barang ID"})
    @ManyToOne(()=>Barang, barang => barang.barangKeluarItem)
    @JoinColumn({name: 'id_barang'})
    barang: Barang;

    @ApiProperty({description: "Barang Keluar ID"})
    @ManyToOne(()=>BarangKeluar, barangKeluar => barangKeluar.barangKeluarItem)
    @JoinColumn({name: 'id_barang_keluar'})
    barangKeluar: BarangKeluar;

    @Column({name: 'jumlah', type:'int8'})
    jumlah: number;

    @ApiProperty({description: "Satuan ID"})
    @ManyToOne(()=>Satuan)
    @JoinColumn({name: 'id_satuan'})
    satuan: Satuan;

}