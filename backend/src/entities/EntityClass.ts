import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { Category } from "./Category";

@Entity()
@ObjectType()
export class EntityClass extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(_ => ID)
    id?: number;

    @Column()
    @Field()
    title: string;

    @ManyToOne(() => Category, category => category.entities, { eager: true})
    @Field(_ => Category)
    category?: Category;

    constructor(
        title: string = ""
    ) {
        super();

        this.title = title;
    }
}