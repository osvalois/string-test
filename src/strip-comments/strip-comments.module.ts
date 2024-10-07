import { Module } from '@nestjs/common';
import { StripCommentsController } from './strip-comments.controller';
import { StripCommentsService } from './strip-comments.service';

@Module({
  controllers: [StripCommentsController],
  providers: [StripCommentsService],
})
export class StripCommentsModule {}