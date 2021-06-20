import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarangMasukItem } from 'src/barang-masuk-item/BarangMasukItem.entity';
import { Barang } from 'src/barang/Barang.entity';
import { Satuan } from 'src/satuan/Satuan.entity';
import { BarangMasukController } from './barang-masuk.controller';
import { BarangMasukService } from './barang-masuk.service';
import { BARANG_MASUK_SERVICE } from './barang-masuk.service.interface';
import { BarangMasuk } from './BarangMasuk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Barang, BarangMasuk, BarangMasukItem, Satuan])],
  controllers: [BarangMasukController],
  providers: [
    {
      provide: BARANG_MASUK_SERVICE,
      useClass: BarangMasukService
    }
  ],
  exports: [TypeOrmModule.forFeature()]
})
export class BarangMasukModule {}
