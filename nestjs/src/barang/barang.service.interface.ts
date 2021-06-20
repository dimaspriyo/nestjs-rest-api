import { CreateBarangRequest } from "./dto/request/create-barang.request";
import { UpdateBarangRequest } from "./dto/request/update-barang.request";
import { BarangResponse } from "./dto/response/barang.response";

export const BARANG_SERVICE = 'BARANG_SERVICE';

export interface IBarangService {

    save(request: CreateBarangRequest): Promise<void>;

    update(request: UpdateBarangRequest, id: string): Promise<void>;

    delete(id: string): Promise<void>;

    findAll(): Promise<BarangResponse[]>;

    findById(id: string): Promise<BarangResponse>;

}
