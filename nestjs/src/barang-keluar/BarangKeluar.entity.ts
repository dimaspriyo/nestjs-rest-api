import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { BarangKeluarItem } from "../barang-keluar-item/BarangKeluarItem.entity";


@Entity({name: 'barang_keluar'})
export class BarangKeluar {

    @PrimaryColumn({name: 'id', type: 'varchar'})
    id: string;

    @Column({name: 'name', type: 'varchar'})
    name: string;

    @OneToMany(()=>BarangKeluarItem, barangKeluarItem => barangKeluarItem.barangKeluar, {cascade: ["insert", "update", "remove"]})
    barangKeluarItem: BarangKeluarItem[];

}