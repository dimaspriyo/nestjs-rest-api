import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Satuan } from './Satuan.entity';
import { ISatuanService } from './satuan.service.interface';
import { CreateSatuanRequest } from "./dto/request/create-satuan.request";
import { UpdateSatuanRequest } from "./dto/request/update-satuan.request";
import { SatuanResponse } from "./dto/response/satuan.response";
import {v4 as uuidV4} from 'uuid';

@Injectable()
export class SatuanService implements ISatuanService {
    constructor(
        @InjectRepository(Satuan)
        private readonly satuanRepository: Repository<Satuan>
    ){}

   async save(createSatuanRequest: CreateSatuanRequest, requester: string): Promise<void> {
        var satuan = new Satuan();
        satuan.id = uuidV4();
        satuan.name = createSatuanRequest.name;

        await this.satuanRepository.save(satuan);
   }

   async update(updateSatuanRequest: UpdateSatuanRequest, id: string, requester: string): Promise<void>{
       var satuan = await this.satuanRepository.findOneOrFail(id).catch((err) => {throw new InternalServerErrorException(err)});
       satuan.name = updateSatuanRequest.name;
        await this.satuanRepository.save(satuan);
   }

    async delete(id: string): Promise<void>{
        var satuan = await this.satuanRepository.findOneOrFail(id).catch((err) => {throw new InternalServerErrorException(err)});
        await this.satuanRepository.delete(satuan);
    }

    async findAll(): Promise<SatuanResponse[]>{
        var response =  (await this.satuanRepository.find()).map((v,i) => {
            var satuan = new Satuan();
            satuan.id = v.id;
            satuan.name = v.name;

            return satuan;
        });

        return response;
    }

   async findById(id: string): Promise<SatuanResponse>{
        var satuan = await this.satuanRepository.findOneOrFail(id).catch((err) => {throw new InternalServerErrorException(err)});
        return satuan;
    }

}
