import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedPhoneField1765192545940 implements MigrationInterface {
    name = 'AddedPhoneField1765192545940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "u_addr"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "u_salary"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "u_phone" character varying(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "u_phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "u_salary" numeric(8,2)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "u_addr" character varying NOT NULL`);
    }

}
