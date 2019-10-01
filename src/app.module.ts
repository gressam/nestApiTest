import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import { HttpErrorFilter } from './shared/http-error.filter';
import { UserModule } from './user/user.module';
import { UserroleModule } from './userrole/userrole.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CarModule, UserModule, UserroleModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpErrorFilter,
  }],
})
export class AppModule {

}
