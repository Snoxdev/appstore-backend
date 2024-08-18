import { Test, TestingModule } from '@nestjs/testing';
import { ResenhaService } from './resenha.service';

describe('ResenhaService', () => {
  let service: ResenhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResenhaService],
    }).compile();

    service = module.get<ResenhaService>(ResenhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
