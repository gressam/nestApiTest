import { Module } from '@nestjs/common';
import { RegionController } from './region.controller';
import { RegionService } from './region.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from '../city/city.entity';
import { RegionEntity } from './region.entity';
import { AddressEntity } from '../address/address.entity';
import { OrderEntity } from '../order/order.entity';
import { CountryEntity } from '../country/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity, RegionEntity, AddressEntity, OrderEntity, CountryEntity])],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule {}
