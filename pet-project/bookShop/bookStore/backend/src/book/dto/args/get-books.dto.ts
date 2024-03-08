import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray } from "class-validator";

@ArgsType()
export class GetBookArgs{
    @Field(() => [String])
    @IsArray()
    id: string[];
}