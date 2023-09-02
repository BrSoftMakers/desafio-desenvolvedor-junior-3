import { Column, PrimaryColumn, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity("post")
export class PostModel {
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn()
    id: number;

    @Column()
    id_usuario_insercao: number;

    @Column()
    usuario_insercao: string;

    @Column({length: 100, nullable: false})
    titulo: string;

    @Column({length: 1000, nullable: false})
    artigo: string;

    @Column({type: 'datetime', nullable: false})
    dataCreatedAt: Date;

    @Column({type: 'datetime', nullable: true})
    dataUpdatedAt: Date;

}