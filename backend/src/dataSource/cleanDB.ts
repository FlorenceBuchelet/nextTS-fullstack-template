import { Category } from "../entities/Category";
import { EntityClass } from "../entities/EntityClass";
import { dataSource } from "./dataSource";

export async function cleanDB() {
    await dataSource.manager.clear(EntityClass);
    await dataSource.manager.clear(Category);
}
