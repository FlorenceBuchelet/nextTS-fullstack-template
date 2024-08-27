import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Example } from "../entities/Example";
import { Category } from "../entities/Category";

@Resolver(Example)
export class ExampleResolver {

    //GetSomeExamples
    //If 'take' is undefined, return all examples
    @Query(type => [Example])
    async getSomeExamples(@Arg("limit", { nullable: true }) limit?: number): Promise<Example[]> {
        const examples: Example[] = await Example.find({
            take: limit,
        });
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

    // Delete an Example
    @Mutation(() => Boolean) // True if success
    async deleteExample(@Arg("id") id: number): Promise<boolean> {
        try {
            const result = await Example.delete(id);
            return result.affected !== 0; // Returns true if a row has been affected
        } catch (error) {
            console.error("Failed to delete id: ", error);
            return false;
        }
    }

    // autres CRUD
}
