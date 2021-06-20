import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IBarangMasukService } from './barang-masuk.service.interface';
import { BarangMasuk } from './BarangMasuk.entity';
import { CreateBarangMasukRequest } from './dto//request/create-barang-masuk.request';
import { UpdateBarangMasukRequest } from './dto//request/update-barang-masuk.request';
import { BarangMasukResponse } from './dto/response/barang-masuk.response';
import { v4 as uuidV4 } from 'uuid';
import { BarangMasukItem } from 'src/barang-masuk-item/BarangMasukItem.entity';
import { Barang } from 'src/barang/Barang.entity';
import { Satuan } from 'src/satuan/Satuan.entity';
import { BarangMasukItemResponse } from 'src/barang-masuk-item/dto/response/barang-masuk-item.response';

@Injectable()
export class BarangMasukService implements IBarangMasukService {
  constructor(
    @InjectRepository(BarangMasuk)
    private readonly barangMasukRepository: Repository<BarangMasuk>,
    @InjectRepository(BarangMasukItem)
    private readonly barangMasukItemRepository: Repository<BarangMasukItem>,
    @InjectRepository(Barang)
    private readonly barangRepository: Repository<Barang>,
    @InjectRepository(Satuan)
    private readonly satuanRepository: Repository<Satuan>,
  ) {}

  async save(request: CreateBarangMasukRequest): Promise<void> {
    var barangMasuk = new BarangMasuk();
    barangMasuk.id = uuidV4();
    barangMasuk.name = request.name;

    barangMasuk.barangMasukItem = await Promise.all(
      request.barang_masuk_item.map(async (v, i) => {
        var item = new BarangMasukItem();
        item.id = uuidV4();
        let barang = await this.barangRepository
          .findOneOrFail(v.barang)
          .catch((err) => {
            throw new InternalServerErrorException(err);
          });

          let stokTerakhir = +barang.jumlah + +v.jumlah
          barang.jumlah = stokTerakhir
          await this.barangRepository.save(barang);

        item.barang = barang;
        item.jumlah = v.jumlah;
        item.satuan = await this.satuanRepository
          .findOneOrFail(v.satuan)
          .catch((err) => {
            throw new InternalServerErrorException(err);
          });

        return item;
      }),
    );

    await this.barangMasukRepository.save(barangMasuk);
  }

  async update(request: UpdateBarangMasukRequest, id: string): Promise<void> {
    var barangMasuk = await this.barangMasukRepository
      .findOneOrFail(id, {
        relations: [
          'barangMasukItem',
          'barangMasukItem.barang',
          'barangMasukItem.satuan',
        ],
      })
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });

    barangMasuk.barangMasukItem.forEach(async (v, i) => {
      await this.barangMasukItemRepository.remove(v);
    });

    barangMasuk.name = request.name;
    barangMasuk.barangMasukItem = await Promise.all(
      request.barang_masuk_item.map(async (v, i) => {
        var item = new BarangMasukItem();
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

    await this.barangMasukRepository.save(barangMasuk);
  }

  async delete(id: string): Promise<void> {
    var barangMasuk = await this.barangMasukRepository
      .findOneOrFail(id)
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });
    await this.barangMasukRepository.remove(barangMasuk);
  }

  async findAll(): Promise<BarangMasukResponse[]> {
    var response = (
      await this.barangMasukRepository.find({
        relations: [
          'barangMasukItem',
          'barangMasukItem.barang',
          'barangMasukItem.satuan',
        ],
      })
    ).map((v, i) => {
      var res = new BarangMasukResponse();
      res.id = v.id;
      res.name = v.name;
      res.barang_masuk_item = v.barangMasukItem.map((v, i) => {
        var barangMasukItem = new BarangMasukItemResponse();
        barangMasukItem.id = v.id;
        barangMasukItem.barang = v.barang.id;
        barangMasukItem.jumlah = v.jumlah;
        barangMasukItem.satuan = v.satuan.id;
        return barangMasukItem;
      });
      return res;
    });

    return response;
  }

  async findById(id: string): Promise<BarangMasukResponse> {
    var barangMasuk = await this.barangMasukRepository
      .findOneOrFail(id, {
        relations: [
          'barangMasukItem',
          'barangMasukItem.barang',
          'barangMasukItem.satuan',
        ],
      })
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });
    var response = new BarangMasukResponse();
    response.id = barangMasuk.id;
    response.name = barangMasuk.name;
    response.barang_masuk_item = barangMasuk.barangMasukItem.map((v, i) => {
      var barangMasukItem = new BarangMasukItemResponse();
      barangMasukItem.id = v.id;
      barangMasukItem.barang = v.barang.id;
      barangMasukItem.jumlah = v.jumlah;
      barangMasukItem.satuan = v.satuan.id;
      return barangMasukItem;
    });
    return response;
  }
}
