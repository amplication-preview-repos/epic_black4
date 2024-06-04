/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProviderWhereInput } from "./ProviderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProviderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => ProviderWhereInput)
  @IsOptional()
  @Field(() => ProviderWhereInput, {
    nullable: true,
  })
  every?: ProviderWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => ProviderWhereInput)
  @IsOptional()
  @Field(() => ProviderWhereInput, {
    nullable: true,
  })
  some?: ProviderWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => ProviderWhereInput)
  @IsOptional()
  @Field(() => ProviderWhereInput, {
    nullable: true,
  })
  none?: ProviderWhereInput;
}
export { ProviderListRelationFilter as ProviderListRelationFilter };
