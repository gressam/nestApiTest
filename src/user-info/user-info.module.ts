import { Module } from '@nestjs/common';
import { UserInfoController } from './user-info.controller';
import { UserInfoService } from './user-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { UserInfoEntity } from './user-info.entity';
import { AddressEntity } from '../address/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfoEntity, UserEntity, AddressEntity])],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {
}
