import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from '../city/city.entity';
import { RegionEntity } from '../region/region.entity';
import { AddressEntity } from './address.entity';
import { OrderEntity } from '../order/order.entity';
import { CountryEntity } from '../country/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity, RegionEntity, AddressEntity, OrderEntity, CountryEntity])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {
}
