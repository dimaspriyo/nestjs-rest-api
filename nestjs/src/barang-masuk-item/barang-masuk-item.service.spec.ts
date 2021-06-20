import { Test, TestingModule } from '@nestjs/testing';
import { BarangMasukItemService } from './barang-masuk-item.service';

describe('BarangMasukItemService', () => {
  let service: BarangMasukItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarangMasukItemService],
    }).compile();

    service = module.get<BarangMasukItemService>(BarangMasukItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
