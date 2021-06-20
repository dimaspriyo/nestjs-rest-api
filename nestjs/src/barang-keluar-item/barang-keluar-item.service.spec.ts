import { Test, TestingModule } from '@nestjs/testing';
import { BarangKeluarItemService } from './barang-keluar-item.service';

describe('BarangKeluarItemService', () => {
  let service: BarangKeluarItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarangKeluarItemService],
    }).compile();

    service = module.get<BarangKeluarItemService>(BarangKeluarItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
