import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetBookArg {
    @Field()
    @IsNotEmpty()
    id: string
}