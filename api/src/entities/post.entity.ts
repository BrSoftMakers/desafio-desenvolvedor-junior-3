import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("post")
export class Post{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    post: string

    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, user => user.post ,{eager: true,onDelete:'CASCADE'})
    user: User
}