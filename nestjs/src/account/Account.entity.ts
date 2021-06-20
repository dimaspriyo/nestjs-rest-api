import { ApiProperty } from "@nestjs/swagger";
import { type } from "os";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, Unique } from "typeorm";
import { Role } from "../role/Role.entity";


@Entity({name: 'account'})
export class Account {

    @PrimaryColumn({name: 'id', type: 'varchar'})
    id: string;

    @Column({name: 'name', type: 'varchar'})
    name: string;
    
    @Column({name: 'created_date' , type: 'timestamp'})
    createdDate: Date;
    
    @Column({name: 'created_by', type: 'varchar'})
    createdBy: string;
    
    @Column({name: 'password', type: 'varchar'})
    password: string;
    
    @Column({name: 'email', type: 'varchar', unique: true})
    email: string;
    
    @ApiProperty({description: "Role ID"})
    @ManyToOne(type => Role, role => role.account)
    @JoinColumn({name: 'role_id', referencedColumnName: "id"})
    // @Column({name: 'role_id', type: 'varchar'})
    role: Role;

}