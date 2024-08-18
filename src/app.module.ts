import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AplicacionModule } from './aplicacion/aplicacion.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ResenhaModule } from './resenha/resenha.module';

@Module({
  imports: [AplicacionModule, UsuarioModule, ResenhaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
