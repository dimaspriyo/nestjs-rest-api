import { Body } from "@nestjs/common";
import {CreateBarangMasukRequest} from './dto//request/create-barang-masuk.request'
import {UpdateBarangMasukRequest} from './dto//request/update-barang-masuk.request'
import { BarangMasukResponse } from "./dto/response/barang-masuk.response";

export const BARANG_MASUK_SERVICE = 'BARANG_MASUK_SERVICE';

export interface IBarangMasukService{

    save(request: CreateBarangMasukRequest): Promise<void>;

    update(request: UpdateBarangMasukRequest, id: string): Promise<void>;

    delete(id: string): Promise<void>;

    findAll(): Promise<BarangMasukResponse[]>;

    findById(id: string): Promise<BarangMasukResponse>;

}