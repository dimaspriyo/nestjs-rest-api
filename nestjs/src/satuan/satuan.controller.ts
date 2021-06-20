import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Req, Res, SetMetadata, UseGuards } from '@nestjs/common';
import { ResponseHelper } from 'src/helper/ResponseHelper';
import { CreateSatuanRequest } from './dto/request/create-satuan.request';
import {ISatuanService, SATUAN_SERVICE} from './satuan.service.interface';
import {Response} from 'express';
import { Roles } from 'src/decorator/role.decorator';
import { UpdateSatuanRequest } from './dto/request/update-satuan.request';
import { ApiBearerAuth, ApiCreatedResponse, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BaseResponse } from 'src/BaseResponse';
import { findAllSatuanSwaggerResponse } from 'src/swagger/response/findAllSatuanSwaggerResponse';
import { findSatuanByIDSatuanSwaggerResponse } from 'src/swagger/response/findSatuanByIDSwaggerResponse copy';

@ApiHeader({
    name: 'Authorization',
    description: 'JWT Token'
    
  })
@ApiTags('satuan')
@Roles('manager','staff')
@Controller('satuan')
export class SatuanController {

    private responseHelper : ResponseHelper;

    constructor(
        @Inject(SATUAN_SERVICE)
        private readonly satuanService: ISatuanService
    ){
        this.responseHelper = new ResponseHelper();
    }

    @ApiCreatedResponse({type: BaseResponse})
    @Post()
    async save(@Body() req: CreateSatuanRequest, @Res() res: Response){
        await this.satuanService.save(req,null);
        return this.responseHelper.ResponseCreated('Satuan Berhasil Ditambahkan',null,res);
    }

    @ApiOkResponse({type: BaseResponse})
    @Put(':id')
    async update(@Body() req: UpdateSatuanRequest,@Param('id') id: string, @Res() res: Response){
        await this.satuanService.update(req,id,null);
        return this.responseHelper.ResponseOK('Satuan Berhasil Diubah',null,res);
    }

    @ApiOkResponse({type: BaseResponse})
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response){
        await this.satuanService.delete(id  );
        return this.responseHelper.ResponseOK('Satuan Berhasil Dihapus',null,res);
    }

    @ApiOkResponse({type: findAllSatuanSwaggerResponse})
    @Get()
    async findAll(@Res() res: Response){
        var response = await this.satuanService.findAll();
        return this.responseHelper.ResponseOK(response,null,res);
    }

    @ApiOkResponse({type: findSatuanByIDSatuanSwaggerResponse})
    @Get(':id')
    async findById(@Param('id') id: string, @Res() res: Response){
        var response = await this.satuanService.findById(id);
        return this.responseHelper.ResponseOK(response,null,res);
    }


}
