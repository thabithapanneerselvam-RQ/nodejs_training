import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    u_id: number;

    @Column()
    u_name: string;

    @Column()
    u_addr: string;

    @Column()
    u_salary: number;
    
}