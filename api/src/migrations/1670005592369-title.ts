import { MigrationInterface, QueryRunner } from "typeorm";

export class title1670005592369 implements MigrationInterface {
    name = 'title1670005592369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "img" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "img" SET NOT NULL`);
    }

}
