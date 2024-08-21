import { Category } from "../entities/Category";
import { Example } from "../entities/Example";
import { dataSource } from "./dataSource";

export async function cleanDB() {
    await dataSource.manager.clear(Example);
    await dataSource.manager.clear(Category);
}
