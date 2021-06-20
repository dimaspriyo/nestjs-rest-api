import { Test, TestingModule } from '@nestjs/testing';
import { BarangKeluarService } from './barang-keluar.service';

describe('BarangKeluarService', () => {
  let service: BarangKeluarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarangKeluarService],
    }).compile();

    service = module.get<BarangKeluarService>(BarangKeluarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
