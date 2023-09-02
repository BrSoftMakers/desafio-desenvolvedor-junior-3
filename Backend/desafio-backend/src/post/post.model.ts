import { Column, PrimaryColumn, PrimaryGeneratedColumn, Entity } from "typeorm";

export class PostModel {
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn()
    id: number;

    @Column()
    id_usuario_insercao: number;

    @Column({length: 100})
    titulo: string;

    @Column()
    artigo: string;

    @Column()
    dataCreatedAt: Date;

    @Column()
    dataUpdatedAt: Date;

}