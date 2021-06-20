import { Test, TestingModule } from '@nestjs/testing';
import { BarangMasukItemController } from './barang-masuk-item.controller';

describe('BarangMasukItemController', () => {
  let controller: BarangMasukItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarangMasukItemController],
    }).compile();

    controller = module.get<BarangMasukItemController>(BarangMasukItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
