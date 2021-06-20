import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'page_permission'})
export class PagePermission {

    @PrimaryColumn({name: 'id', type: 'varchar'})
    id: string;

    @Column({name: 'name', type: 'varchar'})
    name: string;

}