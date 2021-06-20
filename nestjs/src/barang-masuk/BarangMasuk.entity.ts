import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { BarangMasukItem } from "../barang-masuk-item/BarangMasukItem.entity";


@Entity({name: 'barang_masuk'})
export class BarangMasuk {

    @PrimaryColumn({name: 'id', type: 'varchar'})
    id: string;

    @Column({name: 'name', type: 'varchar'})
    name: string;

    @OneToMany(()=>BarangMasukItem, barangMasukItem => barangMasukItem.barangMasuk, {cascade: ['insert','remove','update']})
    barangMasukItem: BarangMasukItem[];

}