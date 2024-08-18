import { Module } from '@nestjs/common';
import { ResenhaService } from './resenha.service';
import { ResenhaController } from './resenha.controller';

@Module({
  controllers: [ResenhaController],
  providers: [ResenhaService],
})
export class ResenhaModule {}
