import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from '../city/city.entity';
import { RegionEntity } from '../region/region.entity';
import { AddressEntity } from '../address/address.entity';
import { OrderEntity } from '../order/order.entity';
import { CountryEntity } from './country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity, RegionEntity, AddressEntity, OrderEntity, CountryEntity])],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {
}
