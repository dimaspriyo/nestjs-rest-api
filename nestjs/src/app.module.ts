import { Inject, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from './account/account.service';
import { AccountController } from './account/account.controller';
import { AccountModule } from './account/account.module';
import { RoleService } from './role/role.service';
import { ApiPermissionService } from './api-permission/api-permission.service';
import { PagePermissionService } from './page-permission/page-permission.service';
import { SatuanService } from './satuan/satuan.service';
import { BarangService } from './barang/barang.service';
import { BarangMasukService } from './barang-masuk/barang-masuk.service';
import { BarangMasukItemService } from './barang-masuk-item/barang-masuk-item.service';
import { BarangKeluarService } from './barang-keluar/barang-keluar.service';
import { BarangKeluarItemService } from './barang-keluar-item/barang-keluar-item.service';
import { RoleModule } from './role/role.module';
import { SatuanController } from './satuan/satuan.controller';
import { SatuanModule } from './satuan/satuan.module';
import { BarangModule } from './barang/barang.module';
import { BarangKeluarController } from './barang-keluar/barang-keluar.controller';
import { BarangKeluarModule } from './barang-keluar/barang-keluar.module';
import { BarangMasukModule } from './barang-masuk/barang-masuk.module';
import { BarangMasukItemController } from './barang-masuk-item/barang-masuk-item.controller';
import { BarangMasukItemModule } from './barang-masuk-item/barang-masuk-item.module';
import { BarangKeluarItemModule } from './barang-keluar-item/barang-keluar-item.module';
import config from '../ormconfig';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './guard/authentication.guard';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { AuthorizationGuard } from './guard/authorization.guard';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    JwtModule.register({ secret: process.env.JWT_SECRET }),
    RoleModule, AccountModule, SatuanModule, BarangModule, BarangKeluarModule, BarangMasukModule, BarangMasukItemModule, BarangKeluarItemModule
  ],
  controllers: [ SatuanController, BarangKeluarController, BarangMasukItemController],
  providers: [
    AppService,AccountService, RoleService, BarangService, BarangMasukService, BarangMasukItemService, BarangKeluarService, BarangKeluarItemService, SatuanService, PagePermissionService, ApiPermissionService
  ],
  exports: [JwtModule.register({ secret: process.env.JWT_SECRET })]
})
export class AppModule implements NestModule {

  constructor(
    private readonly jwtService: JwtService
  ){}

  configure(consumer: MiddlewareConsumer ) {

    consumer
      .apply(AuthenticationMiddleware)
      .exclude(
        {path: 'account', method: RequestMethod.ALL},
        {path: 'account/(.*)', method: RequestMethod.ALL},
        {path: 'role', method: RequestMethod.ALL},
        {path: 'role/(.*)', method: RequestMethod.ALL}
      )
      .forRoutes("*");
  }
}
