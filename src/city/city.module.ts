import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './city.entity';
import { RegionEntity } from '../region/region.entity';
import { AddressEntity } from '../address/address.entity';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity, RegionEntity, AddressEntity, UserEntity])],
  controllers: [CityController],
  providers: [CityService, UserService],
})
export class CityModule {
}
