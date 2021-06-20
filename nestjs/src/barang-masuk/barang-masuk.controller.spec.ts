import { Test, TestingModule } from '@nestjs/testing';
import { BarangMasukController } from './barang-masuk.controller';

describe('BarangMasukController', () => {
  let controller: BarangMasukController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarangMasukController],
    }).compile();

    controller = module.get<BarangMasukController>(BarangMasukController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
