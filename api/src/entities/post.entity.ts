import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("post")
export class Post{
    map(arg0: (item: any) => { id: any; post: any; user: { id: any; name: any; email: any; }; created_at: any; updated_at: any; }) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({nullable: true})
    img: string

    @Column()
    title: string

    @Column()
    post: string

    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, user => user.post ,{eager: true,onDelete:'CASCADE'})
    user: User
}