import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    u_id: number;

    @Column({
        type: "varchar", length: 50, name:"u_name"
    })
    userName: string;

    @Column({
        type: "varchar", unique: true, length: 200, name: "u_email"
    })
    userEmail: string

    @Column({
        type: "varchar", length: 100, name: "u_password"
    })
    userPassword: string

    @Column({
        type: "varchar", length: 10, name: "u_phone"
    })
    userPhone: string;

    @Column({
        type: "varchar"
    })
    userPhoto: string;

}