import { type } from "os";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {Barang} from '../barang/Barang.entity'

@Entity({name: 'satuan'})
export class Satuan {

    @PrimaryColumn({name: 'id', type: 'varchar'})
    id: string;

    @Column({name: 'name', type: 'varchar'})
    name: string;

    @OneToMany(type=>Barang, barang => barang.satuan)
    barang: Barang[];
}