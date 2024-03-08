import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";


@InputType()
export class UpdateBookInput{
    @Field()
    @IsNotEmpty()
    id: string;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    text: string;

    @Field()
    image: string;
}