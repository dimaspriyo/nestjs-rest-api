import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/role/Role.entity';
import { RoleModule } from 'src/role/role.module';
import { AccountController } from './account.controller';
import { Account } from './Account.entity';
import { AccountService } from './account.service';
import { ACCOUNT_SERVICE } from './account.service.interface';
import {JwtModule} from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from 'src/guard/authentication.guard';

@Module({
    imports: [TypeOrmModule.forFeature([Account, Role]),JwtModule.register({ secret: process.env.JWT_SECRET })],
    controllers: [AccountController],
    providers: [
        {
            useClass: AccountService,
            provide: ACCOUNT_SERVICE
        }
    ],
    exports:[TypeOrmModule.forFeature(),JwtModule.register({ secret: process.env.JWT_SECRET })]
})
export class AccountModule {}
