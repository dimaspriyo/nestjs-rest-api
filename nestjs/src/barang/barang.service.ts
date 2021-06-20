import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Barang } from './Barang.entity';
import { IBarangService } from './barang.service.interface';
import { CreateBarangRequest } from "./dto/request/create-barang.request";
import { UpdateBarangRequest } from "./dto/request/update-barang.request";
import { BarangResponse } from "./dto/response/barang.response";
import {v4 as uuidV4} from 'uuid';
import { Satuan } from 'src/satuan/Satuan.entity';

@Injectable()
export class BarangService implements IBarangService {
    constructor(
        @InjectRepository(Barang)
        private readonly barangRepository: Repository<Barang>,

        @InjectRepository(Satuan)
        private readonly satuanRepository: Repository<Satuan>
    ){}

    async save(request: CreateBarangRequest): Promise<void>{
        var barang = new Barang();
        barang.id = uuidV4();
        barang.name = request.nama;
        barang.satuan = await this.satuanRepository.findOneOrFail(request.satuan).catch((err)=>{throw new InternalServerErrorException(err);});
        barang.jumlah = request.jumlah;
        barang.keterangan = request.keterangan;
        await this.barangRepository.save(barang);
    }

   async update(request: UpdateBarangRequest, id: string): Promise<void>{
        var barang = await this.barangRepository.findOneOrFail(id).catch((err)=>{throw new InternalServerErrorException(err);});
        barang.name = request.nama;
        barang.satuan = await this.satuanRepository.findOneOrFail(request.satuan).catch((err)=>{throw new InternalServerErrorException(err);});
        barang.jumlah = request.jumlah;
        barang.keterangan = request.keterangan;
        await this.barangRepository.save(barang);
    }

   async delete(id: string): Promise<void>{
    var barang = await this.barangRepository.findOneOrFail(id).catch((err)=>{throw new InternalServerErrorException(err);});
    await this.barangRepository.remove(barang);
    }

    async findAll(): Promise<BarangResponse[]>{
        var response =  (await this.barangRepository.find({relations: ["satuan"]})).map((v,i) => {
            var res = new BarangResponse();
            res.id = v.id;
            res.jumlah = v.jumlah;
            res.keterangan = v.keterangan;
            res.nama = v.name;
            res.satuan = v.satuan.name;
            return res;
        });
        
        return response;
    }

    async findById(id: string): Promise<BarangResponse>{
        var barang = await this.barangRepository.findOneOrFail(id,{relations: ["satuan"]}).catch((err)=>{throw new InternalServerErrorException(err);});
        var response = new BarangResponse();
        response.id = barang.id;
        response.jumlah = barang.jumlah;
        response.keterangan = barang.keterangan;
        response.nama = barang.name;
        response.satuan = barang.satuan.name;

        return response;
    }
}
