import { Category } from "../entities/Category";
import { EntityClass } from "../entities/EntityClass";
import { dataSource } from "./dataSource";

async function createData(
    title: string,
    category: Category
) {
    const entity = new EntityClass(title);
    entity.category = category;
    await dataSource.manager.save(entity);
}

export async function initTestData() {
    const cat1 = new Category("Cat1");
    const cat2 = new Category("Cat2");

    await dataSource.manager.save(cat1);
    await dataSource.manager.save(cat2);

    await createData("This is a test", cat1);
    await createData("A very testy one", cat2);
}
