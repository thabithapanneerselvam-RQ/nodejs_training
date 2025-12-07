import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1765115460937 implements MigrationInterface {
    name = 'Init1765115460937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("u_id" SERIAL NOT NULL, "u_name" character varying NOT NULL, "u_addr" character varying NOT NULL, "u_salary" integer NOT NULL, CONSTRAINT "PK_ed9eff0c241ae28139f2e55d3e5" PRIMARY KEY ("u_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
