import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Post, Put, Req, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response, Request } from 'express';
import { BaseResponse } from 'src/BaseResponse';
import { Roles } from 'src/decorator/role.decorator';
import { ResponseHelper } from 'src/helper/ResponseHelper';
import { findAllRoleSwaggerResponse } from 'src/swagger/response/findAllRoleSwaggerResponse';
import { findRoleByIDSwaggerResponse } from 'src/swagger/response/findRoleByIDSwaggerResponse';
import { CreateRoleRequest } from './dto/request/create-role.request';
import { UpdateRoleRequest } from './dto/request/update-role.request';
import { RoleService } from './role.service';
import { IRoleService, ROLE_SERVICE } from './role.service.interface';

@ApiTags('role')
@Roles('manager')
@Controller('role')
export class RoleController {


    private responseHelper : ResponseHelper;

    constructor(
        @Inject(ROLE_SERVICE)
        private roleService: IRoleService
    ) {
        this.responseHelper = new ResponseHelper();
    }

    @ApiCreatedResponse({type: BaseResponse})
    @Post()
    async save(@Body() request: CreateRoleRequest, @Res() res: Response) {
      await  this.roleService.save(request,'123').catch((err) => {throw new HttpException(err,HttpStatus.BAD_REQUEST)});       
      return this.responseHelper.ResponseOK(null,'Role Berhasil Ditambahkan',res);
    }

    @ApiOkResponse({type: findAllRoleSwaggerResponse})
    @Get()
    async findAll(@Res() res: Response) {
        var response = await this.roleService.findAll();
        return this.responseHelper.ResponseOK(response,null,res);
    }

    @ApiOkResponse({type: findRoleByIDSwaggerResponse})
    @Get(':id')
    async findById(@Param('id') id: string,@Res() res: Response) {
        var response = await this.roleService.findById(id);
        return this.responseHelper.ResponseOK(response,null,res);
    }

    @ApiOkResponse({type: BaseResponse})
    @Put(':id')
    async update(@Param('id') id: string, @Body() req: UpdateRoleRequest, @Res() res: Response){
        await this.roleService.update(req,id,null);
        return this.responseHelper.ResponseOK(null,'Role Berhasil Diubah',res);
    }

    @ApiOkResponse({type: BaseResponse})
    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response){
        await this.roleService.delete(id);
        return this.responseHelper.ResponseOK(null,'Role Berhasil Dihapus',res);
    }

}
