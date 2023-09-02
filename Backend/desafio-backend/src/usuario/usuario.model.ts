import { Column, PrimaryColumn, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity("usuario")
export class UsuarioModel {
    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn()
    id: number;

    @Column({length: 120, nullable: false})
    nome: String;

    @Column({nullable: false})
    usuario: string;

    @Column({nullable: false})
    senha: string;

    @Column({length: 120, nullable: false})
    email: string;

}