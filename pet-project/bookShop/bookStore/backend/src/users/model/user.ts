import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field()
    userId: string;

    @Field()
    username: string

    @Field()
    password: string;
}
