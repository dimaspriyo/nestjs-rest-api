import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role.controller';
import { Role } from './Role.entity';
import { RoleService } from './role.service';
import { ROLE_SERVICE } from './role.service.interface';

@Module({
  imports: [ TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [
      {
          useClass: RoleService,
          provide: ROLE_SERVICE
      }
  ],
  exports: [TypeOrmModule.forFeature()]
})
export class RoleModule {}
