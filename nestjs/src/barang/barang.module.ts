import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Satuan } from 'src/satuan/Satuan.entity';
import { BarangController } from './barang.controller';
import { Barang } from './Barang.entity';
import { BarangService } from './barang.service';
import { BARANG_SERVICE } from './barang.service.interface';

@Module({
  imports: [TypeOrmModule.forFeature([Barang, Satuan])],
  controllers: [BarangController],
  providers: [
    {
      provide: BARANG_SERVICE,
      useClass: BarangService
    }
  ],
  exports: [TypeOrmModule.forFeature(), BARANG_SERVICE]
})
export class BarangModule {}
