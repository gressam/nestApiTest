import { Module } from '@nestjs/common';
import { UserroleService } from './userrole.service';
import { UserroleController } from './userrole.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserroleEntity } from './userrole.entity';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserroleEntity, UserEntity])],
  controllers: [UserroleController],
  providers: [UserroleService, UserService],

})
export class UserroleModule {
}
