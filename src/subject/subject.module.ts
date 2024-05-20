import { Global, Module } from '@nestjs/common';
import { subjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Global()
@Module({
  controllers: [SubjectController],
  providers: [subjectService, PrismaService]
})
export class AvaliacaoModule {}