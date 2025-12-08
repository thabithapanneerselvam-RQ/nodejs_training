import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyUserFields1765116657823 implements MigrationInterface {
    name = 'ModifyUserFields1765116657823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "u_email" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_a9e357fb19ff8358a955cebb92d" UNIQUE ("u_email")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "u_password" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "u_name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "u_name" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "u_salary"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "u_salary" numeric(8,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "u_salary"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "u_salary" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "u_name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "u_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "u_password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_a9e357fb19ff8358a955cebb92d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "u_email"`);
    }

}
