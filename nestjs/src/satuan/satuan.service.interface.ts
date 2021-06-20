import { CreateSatuanRequest } from "./dto/request/create-satuan.request";
import { UpdateSatuanRequest } from "./dto/request/update-satuan.request";
import { SatuanResponse } from "./dto/response/satuan.response";

export const SATUAN_SERVICE = 'SATUAN_SERVICE';

export interface ISatuanService {
    save(createSatuanRequest: CreateSatuanRequest, requester: string): Promise<void>;

    update(updateSatuanRequest: UpdateSatuanRequest, id: string, requester: string): Promise<void>;

    delete(id: string): Promise<void>;

    findAll(): Promise<SatuanResponse[]>;

    findById(id: string): Promise<SatuanResponse>;

}