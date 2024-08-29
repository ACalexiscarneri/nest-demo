import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsadmin1724782303503 implements MigrationInterface {
    name = 'AddIsadmin1724782303503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdmin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdmin"`);
    }

}
