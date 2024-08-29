import { MigrationInterface, QueryRunner } from "typeorm";

export class Relacion1724515024659 implements MigrationInterface {
    name = 'Relacion1724515024659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_749e30f71cc0d2d95f8546f4592"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "REL_749e30f71cc0d2d95f8546f459"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "orderDetailId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "orderDetailId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "REL_749e30f71cc0d2d95f8546f459" UNIQUE ("orderDetailId")`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_749e30f71cc0d2d95f8546f4592" FOREIGN KEY ("orderDetailId") REFERENCES "ordersdetails"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
