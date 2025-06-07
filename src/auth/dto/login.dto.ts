import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'admin@example.com',
    description: 'Email address of the admin user. Use a valid email format.',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'AdminPass123!',
    description: 'Password for the admin user.',
  })
  @IsString()
  password: string;
}
