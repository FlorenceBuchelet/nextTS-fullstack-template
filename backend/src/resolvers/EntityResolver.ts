import { Query, Resolver } from "type-graphql";
import { EntityClass } from "../entities/Entity";

@Resolver(EntityClass)
export class EntityResolver {

    @Query(type => [EntityClass])
    async getAllEntities(): Promise<EntityClass[]> {
        const entities: EntityClass[] = await EntityClass.find({});
        return entities;
    }
}