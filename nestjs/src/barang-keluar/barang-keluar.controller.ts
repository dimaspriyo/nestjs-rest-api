import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Res } from '@nestjs/common';
import { IBarangService } from 'src/barang/barang.service.interface';
import { ResponseHelper } from 'src/helper/ResponseHelper';
import { BARANG_KELUAR_SERVICE, IBarangKeluarService } from './barang-keluar.service.interface';
import { CreateBarangKeluarRequest } from './dto/request/create-barang-keluar.request';
import {Response} from 'express';
import { UpdateBarangKeluarRequest } from './dto/request/update-barang-keluar.request';
import { Roles } from 'src/decorator/role.decorator';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiHeader({
    name: 'Authorization',
    description: 'JWT Token'
  })
@ApiTags('barang keluar')
@Roles('manager','staff')
@Controller('barang-keluar')
export class BarangKeluarController {
    private responseHelper: ResponseHelper;
    constructor(
        @Inject(BARANG_KELUAR_SERVICE)
        private barangKeluarService: IBarangKeluarService
    ){
        this.responseHelper = new ResponseHelper();
    }

    @Post()
    async save(@Body() req: CreateBarangKeluarRequest, @Res() res: Response){
        await this.barangKeluarService.save(req);
        return this.responseHelper.ResponseCreated(null,'Barang Keluar Berhasil Ditambahkan',res);
    }

    @Put(':id')
    async update(@Body() req: UpdateBarangKeluarRequest,@Param('id') id: string, @Res() res: Response){
        await this.barangKeluarService.update(req,id);
        return this.responseHelper.ResponseOK(null,'Barang Keluar Berhasil Diubah',res);
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response){
        await this.barangKeluarService.delete(id);
        return this.responseHelper.ResponseOK(null,'Barang Keluar Berhasil Dihapus',res);
    }

    @Get()
    async findAll(@Res() res: Response){
        var response = await this.barangKeluarService.findAll();
        return this.responseHelper.ResponseOK(response,null,res);
    }

    @Get(':id')
    async findById(@Param('id') id: string,@Res() res: Response){
        var response = await this.barangKeluarService.findById(id);
        return this.responseHelper.ResponseOK(response,null,res);
    }
}
