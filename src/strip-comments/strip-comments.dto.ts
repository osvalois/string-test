// src/strip-comments/strip-comments.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray } from 'class-validator';

export class StripCommentsDto {
  @ApiProperty({
    description: 'Texto de entrada con posibles comentarios',
    example: 'apples, pears # and bananas\ngrapes\nbananas !apples',
  })
  @IsString()
  input: string;

  @ApiProperty({
    description: 'Marcadores de comentarios a eliminar',
    example: ['#', '!'],
  })
  @IsArray()
  @IsString({ each: true })
  commentMarkers: string[];
}