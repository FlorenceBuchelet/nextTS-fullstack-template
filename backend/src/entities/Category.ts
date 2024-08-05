import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityClass } from "./Entity";

@Entity()
@ObjectType()
export class Category extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(_ => ID)
    id?: number;

    @Column()
    @Field()
    title: string;

    @OneToMany(() => EntityClass, entity => entity.category)
    @Field(_ => [EntityClass])
    entities?: Promise<EntityClass[]>;

    constructor(
        title: string = ""
    ) {
        super();

        this.title = title;
    }
}