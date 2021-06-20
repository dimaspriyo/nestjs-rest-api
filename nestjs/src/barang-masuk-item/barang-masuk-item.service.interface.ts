import { CreateBarangMasukItemRequest } from "./dto/request/create-barang-masuk-item.request";
import { UpdateBarangMasukItemRequest } from "./dto/request/update-barang-masuk-item.request";
import { BarangMasukItemResponse } from "./dto/response/barang-masuk-item.response";

const BARANG_MASUK_ITEM_SERVICE = 'BARANG_MASUK_ITEM_SERVICE'

export interface IBarangMasukItemService{

    save(request: CreateBarangMasukItemRequest): Promise<void>;

    update(request: UpdateBarangMasukItemRequest, id: string): Promise<void>;

    delete(id: string): Promise<void>;

    findAll(): Promise<BarangMasukItemResponse[]>;

    findById(id: string): Promise<BarangMasukItemResponse>;

}