import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Post } from "./post.entity";
@Entity("user")

export class User{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({nullable: true})
    img: string

    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Post, post => post.user,{onDelete:'CASCADE'})
    post: Post[]

}