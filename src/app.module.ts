import { Module } from '@nestjs/common';
import { StripCommentsModule } from './strip-comments/strip-comments.module';

@Module({
  imports: [StripCommentsModule],
})
export class AppModule {}