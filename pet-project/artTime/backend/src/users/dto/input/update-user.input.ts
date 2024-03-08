import { IsNotEmpty, IsOptional,  } from 'class-validator';
import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;

    @Field({nullable: true})
    username?: string;
    
    @Field({nullable: true})
    password?: string;
}