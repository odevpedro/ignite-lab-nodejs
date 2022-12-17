import { Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AppController } from './infra/app.controller';
import { HttpModule } from './infra/http.module';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    PrismaService,
  ],
})
export class AppModule {}
