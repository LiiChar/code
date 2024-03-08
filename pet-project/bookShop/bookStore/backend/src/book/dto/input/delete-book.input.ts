import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";


@InputType()
export class DeleteBookInput{
    @Field()
    @IsNotEmpty()
    id: string;
}