import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateUserInput {
    @Field()
    @IsNotEmpty()
    username: string;
    
    @Field()
    @IsNotEmpty()
    password: string;
}