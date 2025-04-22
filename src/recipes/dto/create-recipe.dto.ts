import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateRecipeDto {
  @ApiProperty({ example: 'Spaghetti Carbonara' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ example: 'A creamy pasta dish with pancetta.' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: ['pasta', 'eggs', 'cheese', 'pancetta'],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  ingredients: string[];
}
