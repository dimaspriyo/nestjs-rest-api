import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { ACCOUNT_SERVICE, IAccountService } from './account.service.interface';
import { CreateAccountRequest } from './dto/request/create-account.request';
import { UpdateAccountRequest } from './dto/request/update-account.request';
import {Response} from 'express';
import { ResponseHelper } from 'src/helper/ResponseHelper';
import { LoginRequest } from './dto/request/login-request.dto';
import { Roles } from 'src/decorator/role.decorator';
import { ApiBasicAuth, ApiCreatedResponse, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BaseResponse } from 'src/BaseResponse';
import { LoginResponse } from './dto/response/login.response';
import { findAllAccountSwaggerResponse } from 'src/swagger/response/findAllAccountSwaggerResponse';
import { findAccountByIDSwaggerResponse } from 'src/swagger/response/findAccountByIDSwaggerResponse';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { AuthenticationGuard } from 'src/guard/authentication.guard';


@ApiTags('account')
@Roles('manager')
@Controller('account')
export class AccountController {

    private responseHelper : ResponseHelper;

    constructor(
        @Inject(ACCOUNT_SERVICE)
        private readonly accountService: IAccountService
    ){
        this.responseHelper = new ResponseHelper();
    }


    @ApiCreatedResponse({type: BaseResponse})
    @Post()
    async save(@Body() req: CreateAccountRequest, @Res() res: Response){
        await this.accountService.save(req,null);
        return this.responseHelper.ResponseCreated(null,"Akun Berhasil Ditambahkan", res);
    }

    @UseGuards(AuthorizationGuard)
    @ApiHeader({
        name: 'Authorization',
        description: 'JWT Token'
        
      })
    @ApiOkResponse({type: BaseResponse})
    @Put(':id')
    async update(@Param('id') id: string, @Body() req: UpdateAccountRequest, @Res() res: Response){
        await this.accountService.update(req,id,null);
        return this.responseHelper.ResponseCreated(null,"Akun Berhasil Diubah", res);
    }

    @ApiHeader({
        name: 'Authorization',
        description: 'JWT Token'
        
      })
    @ApiOkResponse({type: BaseResponse})
    @Delete(':id')
    async delete(@Param('id') id: string){
        await this.accountService.delete(id);
    }

    @ApiHeader({
        name: 'Authorization',
        description: 'JWT Token'
        
      })
    @ApiOkResponse({type: findAllAccountSwaggerResponse})
    @Get()
    async findAll(@Res() res: Response){
        var response = await this.accountService.findAll();
        return this.responseHelper.ResponseOK(response,null,res);
    }

    @ApiHeader({
        name: 'Authorization',
        description: 'JWT Token'
        
      })
    @ApiOkResponse({type: findAccountByIDSwaggerResponse})
    @Get(':id')
    async findById(@Param('id') id: string, @Res() res: Response){
        var response = await this.accountService.findById(id);
        return this.responseHelper.ResponseOK(response,null,res);
    }

    @ApiOkResponse({type: LoginResponse})
    @Post('login')
    async login(@Body() request: LoginRequest, @Res() res: Response){
        var response = await this.accountService.login(request);
        return this.responseHelper.ResponseOK(response,null,res);
    }
  

}
