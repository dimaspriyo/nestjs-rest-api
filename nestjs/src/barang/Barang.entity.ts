import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { BarangKeluar } from "../barang-keluar/BarangKeluar.entity";
import { BarangKeluarItem } from "../barang-keluar-item/BarangKeluarItem.entity";
import { BarangMasukItem } from "../barang-masuk-item/BarangMasukItem.entity";
import { Satuan } from "../satuan/Satuan.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: 'barang'})
export class Barang {

    @PrimaryColumn({name: 'id', type:'varchar'})
    id: string;

    @Column({name: 'nama', type:'varchar'})
    name: string;

    @ApiProperty({description: "Satuan ID"})
    @ManyToOne(() => Satuan, satuan => satuan.barang)
    @JoinColumn({name: 'id_satuan'})
    satuan: Satuan;

    @Column({name: 'jumlah', type:'int8'})
    jumlah: number;

    @Column({name: 'keterangan', type:'varchar'})
    keterangan: string;

    @OneToMany(()=>BarangKeluarItem, barangKeluarItem => barangKeluarItem.barang)
    barangKeluarItem: BarangKeluar[];

    @OneToMany(()=>BarangMasukItem, barangMasukItem => barangMasukItem.barang)
    barangMasukItem: BarangKeluar[];


}