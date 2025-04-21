/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsArray()
  @IsString({ each: true })
  ingredients: string[];
}
