import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ required: true, example: 'usuario@empresa.com' })
  email: string;

  @ApiProperty({ required: true, example: 'Brandon Vado' })
  name: string;

  username?: string;

  @ApiProperty({ required: true, example: 'pasword123' })
  password: string; // <-- Corregido: 'password' con doble 's'
}