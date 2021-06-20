import { Test, TestingModule } from '@nestjs/testing';
import { BarangKeluarController } from './barang-keluar.controller';

describe('BarangKeluarController', () => {
  let controller: BarangKeluarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarangKeluarController],
    }).compile();

    controller = module.get<BarangKeluarController>(BarangKeluarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
