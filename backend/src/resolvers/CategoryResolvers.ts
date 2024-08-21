import { Arg, Query, Resolver } from "type-graphql";
import { Category } from "../entities/Category";

@Resolver(Category)
export class CategoryResolver {

    // GetAllCategories
    @Query(type => [Category])
    async getAllCategories(): Promise<Category[]> {
        const category: Category[] = await Category.find({});
        return category;
    }

    // Get one Category by ID
    @Query(() => Category, { nullable: true })
    async getCategoryById(@Arg("id") id: number): Promise<Category | null> {
        return Category.findOneBy({ id });
    }

    // autres CRUD
}
