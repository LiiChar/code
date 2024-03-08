import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";


@InputType()
export class CreateBookInput {
    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    description: string;

    @Field()
    @IsNotEmpty()
    image: string;

    @Field()
    @IsNotEmpty()
    text: string;
}