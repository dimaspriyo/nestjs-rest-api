import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Account } from "../account/Account.entity";
import { PagePermission } from "../page-permission/PagePermission.entity";
import { ApiPermission } from "../api-permission/ApiPermission.entity";


@Entity({name: 'role'})
export class Role {

    @PrimaryColumn({name: 'id', type: 'varchar'})
    id: string;

    @Column({name: 'name', type: 'varchar'})
    name: string;

    @OneToMany(type=>Account, account => account.role)
    account: Account[];

    @ManyToMany(()=>PagePermission)
    @JoinTable({name: 'role_page_Permission'})
    pagePermission: PagePermission[];

    @ManyToMany(()=>ApiPermission)
    @JoinTable({name: 'role_api_Permission'})
    apiPermission: ApiPermission[];

}