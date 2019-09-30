import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UsePipes } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDTO } from './car.dto';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('api/car')
export class CarController {

  constructor(private carService: CarService) {
  }

  @Get()
  showAllCars() {
    return this.carService.showAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createCar(
    @Body() data: CarDTO,
  ) {
    return this.carService.create(data);
  }

  @Get(':id')
  readCar(
    @Param('id') id: string,
  ) {
    return this.carService.read(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateCar(
    @Param('id') id: string,
    @Body() data: Partial<CarDTO>,
  ) {
    return this.carService.update(id, data);
  }

  @Delete(':id')
  destroy(
    @Param('id') id: string,
  ) {
    this.carService.destroy(id);
  }
}
