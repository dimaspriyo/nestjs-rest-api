import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Req, Res } from '@nestjs/common';
import { ResponseHelper } from 'src/helper/ResponseHelper';
import { BARANG_SERVICE, IBarangService } from './barang.service.interface';
import { CreateBarangRequest } from './dto/request/create-barang.request';
import {Response} from 'express';
import { UpdateBarangRequest } from './dto/request/update-barang.request';
import { Roles } from 'src/decorator/role.decorator';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiHeader({
    name: 'Authorization',
    description: 'JWT Token'
  })
@ApiTags('barang')
@Roles('manager','staff')
@Controller('barang')
export class BarangController {

    private responseHelper: ResponseHelper;
    constructor(
        @Inject(BARANG_SERVICE)
        private readonly barangService: IBarangService
    ){
        this.responseHelper = new ResponseHelper();
    }

    @Post()
    async save(@Body() req: CreateBarangRequest, @Res() res: Response){
        await this.barangService.save(req);
        return this.responseHelper.ResponseOK(null,'Barang Berhasil Ditambahkan',res);
    }
    
    @Put(':id')
    async update(@Body() req: UpdateBarangRequest, @Param('id') id: string, @Res() res: Response){
        await this.barangService.update(req,id);
        return this.responseHelper.ResponseOK(null,'Barang Berhasil Diubah',res);
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response){
        await this.barangService.delete(id);
        return this.responseHelper.ResponseOK(null,'Barang Berhasil Dihapus',res);
    }

    @Get()
    async findAll(@Res() res: Response){
        var response = await this.barangService.findAll();
        return this.responseHelper.ResponseOK(response,null,res);
    }

    @Get(':id')
    async findById(@Param('id') id: string, @Res() res: Response){
        var response = await this.barangService.findById(id);
        return this.responseHelper.ResponseOK(response,null,res);
    }



}
