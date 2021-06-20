import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'api_permission'})
export class ApiPermission {

    @PrimaryColumn({name: 'id', type: 'varchar'})
    id: string;

    @Column({name: 'name', type: 'varchar'})
    name: string;

}