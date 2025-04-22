import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(userDto: RegisterDto) {
    const hashed = await bcrypt.hash(userDto.password, 10);

    const data = { email: userDto.email, password: hashed };

    const user = await this.prisma.user.create({ data });

    return { id: user.id, email: user.email };
  }

  async login(userDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: userDto.email },
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(userDto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
