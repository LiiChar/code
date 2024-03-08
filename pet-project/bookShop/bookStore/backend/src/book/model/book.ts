import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Book {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    image: string;

    @Field()
    rate: number;

    @Field()
    text: string;
}