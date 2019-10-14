import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserroleEntity } from '../userrole/userrole.entity';
import { UserroleService } from '../userrole/userrole.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserroleEntity])],
  controllers: [UserController],
  providers: [UserService, UserroleService],
  exports: [UserService],
})

export class UserModule {
}
