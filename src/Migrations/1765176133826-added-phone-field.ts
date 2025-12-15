import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedPhoneField1765176133826 implements MigrationInterface {
    name = 'AddedPhoneField1765176133826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "u_phone" character varying(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "u_phone"`);
    }

}
