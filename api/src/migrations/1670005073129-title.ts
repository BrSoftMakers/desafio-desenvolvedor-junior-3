import { MigrationInterface, QueryRunner } from "typeorm";

export class title1670005073129 implements MigrationInterface {
    name = 'title1670005073129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "img" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "title" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "img"`);
    }

}
