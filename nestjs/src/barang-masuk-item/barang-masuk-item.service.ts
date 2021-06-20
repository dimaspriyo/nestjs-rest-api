import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IBarangMasukItemService } from './barang-masuk-item.service.interface';
import { BarangMasukItem } from './BarangMasukItem.entity';
import { CreateBarangMasukItemRequest } from "./dto/request/create-barang-masuk-item.request";
import { UpdateBarangMasukItemRequest } from "./dto/request/update-barang-masuk-item.request";
import { BarangMasukItemResponse } from "./dto/response/barang-masuk-item.response";
import {v4 as uuidV4} from 'uuid';
import { Satuan } from 'src/satuan/Satuan.entity';

@Injectable()
export class BarangMasukItemService{}
