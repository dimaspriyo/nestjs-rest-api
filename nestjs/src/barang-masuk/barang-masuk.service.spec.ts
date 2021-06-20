import { Test, TestingModule } from '@nestjs/testing';
import { BarangMasukService } from './barang-masuk.service';

describe('BarangMasukService', () => {
  let service: BarangMasukService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarangMasukService],
    }).compile();

    service = module.get<BarangMasukService>(BarangMasukService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
