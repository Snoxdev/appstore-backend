import { Test, TestingModule } from '@nestjs/testing';
import { ResenhaController } from './resenha.controller';
import { ResenhaService } from './resenha.service';

describe('ResenhaController', () => {
  let controller: ResenhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResenhaController],
      providers: [ResenhaService],
    }).compile();

    controller = module.get<ResenhaController>(ResenhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
