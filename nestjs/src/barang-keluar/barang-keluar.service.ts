import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BarangKeluar } from './BarangKeluar.entity';
import { CreateBarangKeluarRequest } from './dto/request/create-barang-keluar.request';
import { UpdateBarangKeluarRequest } from './dto/request/update-barang-keluar.request';
import { BarangKeluarReseponse } from './dto/response/brang-keluar.response';
import { v4 as uuidV4 } from 'uuid';
import { IBarangKeluarService } from './barang-keluar.service.interface';
import { Barang } from 'src/barang/Barang.entity';
import { BarangKeluarItem } from 'src/barang-keluar-item/BarangKeluarItem.entity';
import { Satuan } from 'src/satuan/Satuan.entity';
import { BarangKeluarItemResponse } from 'src/barang-keluar-item/dto/response/barang-keluar.item.response';

@Injectable()
export class BarangKeluarService implements IBarangKeluarService {
  constructor(
    @InjectRepository(BarangKeluar)
    private readonly barangKeluarRepository: Repository<BarangKeluar>,
    @InjectRepository(Barang)
    private readonly barangRepository: Repository<Barang>,
    @InjectRepository(BarangKeluarItem)
    private readonly barangKeluarItemRepository: Repository<BarangKeluarItem>,
    @InjectRepository(Satuan)
    private readonly satuanRepository: Repository<Satuan>,
  ) {}

  async save(request: CreateBarangKeluarRequest): Promise<void> {

    var barangKeluar = new BarangKeluar();
    barangKeluar.id = uuidV4();
    barangKeluar.name = request.name;
    barangKeluar.barangKeluarItem = await Promise.all(
      request.barang_keluar_item.map(async (v, i) => {
        var item = new BarangKeluarItem();
        item.id = uuidV4();
        let barang = await this.barangRepository
          .findOneOrFail(v.barang)
          .catch((err) => {
            throw new InternalServerErrorException(err);
          });

          if(barang.jumlah == 0){
            throw new InternalServerErrorException("Stok Barang " + barang.name + " Kosong");
          }

          let stokTerakhir = barang.jumlah - v.jumlah
          barang.jumlah = stokTerakhir
          if(barang.jumlah < 0 ){
            throw new InternalServerErrorException("Stok Barang " + barang.name + " Tidak Mencukupi");
          }

          await this.barangRepository.save(barang);


          item.barang = barang;
        item.jumlah = v.jumlah;

        return item;
      }),
    );
    await this.barangKeluarRepository.save(barangKeluar);
  }

  async update(request: UpdateBarangKeluarRequest, id: string): Promise<void> {
    var barangKeluar = await this.barangKeluarRepository
      .findOneOrFail(id,{relations: ["barangKeluarItem","barangKeluarItem.barang","barangKeluarItem.satuan"]})
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });

    barangKeluar.barangKeluarItem.forEach((v, i) => {
      this.barangKeluarItemRepository.remove(v);
    });

    barangKeluar.name = request.name;
    barangKeluar.barangKeluarItem = await Promise.all(
      request.barang_keluar_item.map(async (v, i) => {
        var item = new BarangKeluarItem();
        item.id = uuidV4();
        item.barang = await this.barangRepository
          .findOneOrFail(v.barang)
          .catch((err) => {
            throw new InternalServerErrorException(err);
          });

        item.jumlah = v.jumlah;
        item.satuan = await this.satuanRepository
          .findOneOrFail(v.satuan)
          .catch((err) => {
            throw new InternalServerErrorException(err);
          });
        return item;
      }),
    );
    await this.barangKeluarRepository.save(barangKeluar);
  }

  async delete(id: string): Promise<void> {
    var barangKeluar = await this.barangKeluarRepository
      .findOneOrFail(id)
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });
    await this.barangKeluarRepository.remove(barangKeluar);
  }

  async findAll(): Promise<BarangKeluarReseponse[]> {
    var response = (
      await this.barangKeluarRepository.find({
        relations: [
          'barangKeluarItem',
          'barangKeluarItem.barang',
          'barangKeluarItem.satuan',
        ],
      })
    ).map((v, i) => {
      var res = new BarangKeluarReseponse();
      res.id = v.id;
      res.name = v.name;
      res.barang_keluar_item = v.barangKeluarItem.map((v, i) => {
        var barangKeluarItem = new BarangKeluarItemResponse();
        barangKeluarItem.id = v.id;
        barangKeluarItem.barang = v.barang.id;
        barangKeluarItem.jumlah = v.jumlah;
        return barangKeluarItem;
      });

      return res;
    });

    return response;
  }

  async findById(id: string): Promise<BarangKeluarReseponse> {
    var barangKeluar = await this.barangKeluarRepository
      .findOneOrFail(id,{relations: ["barangKeluarItem","barangKeluarItem.barang","barangKeluarItem.satuan"]})
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });
    var res = new BarangKeluarReseponse();
    res.id = barangKeluar.id;
    res.name = barangKeluar.name;
    res.barang_keluar_item = barangKeluar.barangKeluarItem.map((v, i) => {
      var barangKeluarItem = new BarangKeluarItemResponse();
      barangKeluarItem.id = v.id;
      barangKeluarItem.barang = v.barang.id;
      barangKeluarItem.jumlah = v.jumlah;
      return barangKeluarItem;
    });

    return res;
  }
}
