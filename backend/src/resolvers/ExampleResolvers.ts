import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Example } from "../entities/Example";
import { Category } from "../entities/Category";

@Resolver(Example)
export class ExampleResolver {

    // GetAllExamples
    @Query(type => [Example])
    async getAllExamples(): Promise<Example[]> {
        const examples: Example[] = await Example.find({});
        return examples;
    }

    // Get one Example by ID
    @Query(() => Example, { nullable: true })
    async getExampleById(@Arg("id") id: number): Promise<Example | null> {
        return Example.findOneBy({ id });
    }

    // Create new Example
    @Mutation(() => Example)
    async createExample(
        @Arg("title") title: string,
        @Arg("categoryId", { nullable: true }) categoryId?: number
    ): Promise<Example> {
        const example = new Example();
        example.title = title;

        if (categoryId) {
            const category = await Category.findOne({ where: { id: categoryId } });
            if (category) {
                example.category = category;
            }
        }
        await example.save();
        return example;
    }

    // autres CRUD
}
