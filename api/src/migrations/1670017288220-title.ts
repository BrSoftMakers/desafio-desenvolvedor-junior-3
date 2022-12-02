import { MigrationInterface, QueryRunner } from "typeorm";

export class title1670017288220 implements MigrationInterface {
    name = 'title1670017288220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "img" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "img"`);
    }

}
