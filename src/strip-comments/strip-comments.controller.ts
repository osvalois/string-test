// src/strip-comments/strip-comments.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StripCommentsService } from './strip-comments.service';
import { StripCommentsDto } from './strip-comments.dto';

@ApiTags('strip-comments')
@Controller('strip-comments')
export class StripCommentsController {
  constructor(private readonly stripCommentsService: StripCommentsService) {}

  @Post()
  @ApiOperation({ summary: 'Eliminar comentarios de un texto' })
  @ApiResponse({ status: 200, description: 'Texto sin comentarios' })
  stripComments(@Body() stripCommentsDto: StripCommentsDto): string {
    return this.stripCommentsService.stripComments(
      stripCommentsDto.input,
      stripCommentsDto.commentMarkers,
    );
  }
}