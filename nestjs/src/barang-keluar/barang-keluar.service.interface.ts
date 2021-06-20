import { CreateBarangKeluarRequest } from "./dto/request/create-barang-keluar.request";
import { UpdateBarangKeluarRequest } from "./dto/request/update-barang-keluar.request";
import { BarangKeluarReseponse } from "./dto/response/brang-keluar.response";

export const BARANG_KELUAR_SERVICE = 'BARANG_KELUAR_SERVICE';

export interface IBarangKeluarService{

    save(request: CreateBarangKeluarRequest): Promise<void>;

    update(request: UpdateBarangKeluarRequest, id: string): Promise<void>;

    delete(id: string): Promise<void>;

    findAll(): Promise<BarangKeluarReseponse[]>;

    findById(id: string): Promise<BarangKeluarReseponse>;

}