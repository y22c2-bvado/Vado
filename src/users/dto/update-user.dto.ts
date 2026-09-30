// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger'
import { CreateUserDto } from './create-user.dto';
import { PrismaService } from '../../prisma/prisma.service';

export class UpdateUserDto extends PartialType(CreateUserDto) {} 
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto:  CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }





  
}