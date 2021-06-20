import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatuanController } from './satuan.controller';
import { Satuan } from './Satuan.entity';
import { SatuanService } from './satuan.service';
import { SATUAN_SERVICE } from './satuan.service.interface';

@Module({
    imports: [TypeOrmModule.forFeature([Satuan])],
    controllers: [SatuanController],
    providers:[
        {
            useClass: SatuanService,
            provide: SATUAN_SERVICE
        }
    ],
    exports: [TypeOrmModule.forFeature(), SATUAN_SERVICE]
})
export class SatuanModule {}
