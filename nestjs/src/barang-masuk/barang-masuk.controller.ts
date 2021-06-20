import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Req, Res } from '@nestjs/common';
import { ResponseHelper } from 'src/helper/ResponseHelper';
import {BARANG_MASUK_SERVICE, IBarangMasukService} from './barang-masuk.service.interface';
import {CreateBarangMasukRequest} from './dto//request/create-barang-masuk.request'
import {UpdateBarangMasukRequest} from './dto//request/update-barang-masuk.request'
import {response, Response} from 'express';
import { Roles } from 'src/decorator/role.decorator';
import { ApiCreatedResponse, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BaseResponse } from 'src/BaseResponse';

@ApiHeader({
    name: 'Authorization',
    description: 'JWT Token'
  })
@ApiTags('barang masuk')
@Roles('manager','staff')
@Controller('barang-masuk')
export class BarangMasukController {

    private responseHelper: ResponseHelper;

    constructor(
        @Inject(BARANG_MASUK_SERVICE)
        private readonly barangMasukService: IBarangMasukService
    ){
        this.responseHelper = new ResponseHelper();
    }

    @ApiCreatedResponse({type: BaseResponse})
    @Post()
    async save(@Body() req: CreateBarangMasukRequest, @Res() res: Response){
        await this.barangMasukService.save(req);
        this.responseHelper.ResponseCreated(null,'Barang Masuk Berhasil Ditambahkan',res);
    }

    @ApiOkResponse({type: BaseResponse})
    @Put(':id')
    async update(@Body() req: UpdateBarangMasukRequest,@Param('id') id: string,@Res() res: Response){
        await this.barangMasukService.update(req,id);
        this.responseHelper.ResponseCreated(null,'Barang Masuk Berhasil Diubah',res);
    }

    @ApiOkResponse({type: BaseResponse})
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response){
        await this.barangMasukService.delete(id);
        this.responseHelper.ResponseCreated(null,'Barang Masuk Berhasil Dihapus',res);
    }

    @Get()
    async findAll(@Res() res: Response){
        var response = await this.barangMasukService.findAll();
        this.responseHelper.ResponseCreated(response,null,res);
    }

    @Get(':id')
    async findById(@Param('id') id: string, @Res() res: Response){
        var response = await this.barangMasukService.findById(id);
        this.responseHelper.ResponseCreated(response,null,res);
    }
}
