import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionEntity } from '../region/region.entity';
import { AddressEntity } from '../address/address.entity';
import { CountryEntity } from './country.entity';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegionEntity, AddressEntity, CountryEntity, UserEntity])],
  controllers: [CountryController],
  providers: [CountryService, UserService],
})
export class CountryModule {
}
