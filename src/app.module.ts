import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpErrorFilter } from './shared/http-error.filter';
import { UserModule } from './user/user.module';
import { UserroleModule } from './userrole/userrole.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';
import { AddressModule } from './address/address.module';
import { CountryModule } from './country/country.module';
import { RegionModule } from './region/region.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, UserroleModule, OrderModule, AddressModule, CountryModule, RegionModule, CityModule],
  controllers: [AppController, OrderController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpErrorFilter,
  }, OrderService],
})
export class AppModule {

}
