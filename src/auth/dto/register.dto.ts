import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'admin@example.com',
    description: 'Email address of the user. Use a valid email format.',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'AdminPass123!',
    description: 'Password for the user. Minimum length is 6 characters.',
  })
  @IsString()
  @MinLength(6)
  password: string;
}
