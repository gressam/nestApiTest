import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './city.entity';
import { RegionEntity } from '../region/region.entity';
import { AddressEntity } from '../address/address.entity';
import { OrderEntity } from '../order/order.entity';
import { CountryEntity } from '../country/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity, RegionEntity, AddressEntity, OrderEntity, CountryEntity])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {
}
