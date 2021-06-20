import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarangKeluarController } from './barang-keluar.controller';
import { BarangKeluarService } from './barang-keluar.service';
import { BarangKeluar } from './BarangKeluar.entity';
import {BARANG_KELUAR_SERVICE} from './barang-keluar.service.interface';
import { Satuan } from 'src/satuan/Satuan.entity';
import { Barang } from 'src/barang/Barang.entity';
import { BarangKeluarItem } from 'src/barang-keluar-item/BarangKeluarItem.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BarangKeluar, Satuan,Barang, BarangKeluarItem])],
    controllers: [BarangKeluarController],
    providers: [
        {
            provide: BARANG_KELUAR_SERVICE,
            useClass: BarangKeluarService
        }
    ],
    exports: [TypeOrmModule.forFeature(),BARANG_KELUAR_SERVICE]
    
})
export class BarangKeluarModule {}
