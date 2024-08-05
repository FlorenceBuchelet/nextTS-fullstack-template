import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "../../database/database.sqlite",
    entities: ["src/entities/*.ts"],
    synchronize: true,
    logging: true // FIXME: delete this line in production
})