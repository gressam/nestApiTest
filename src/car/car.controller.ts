import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDTO } from './car.dto';

@Controller('car')
export class CarController {

  constructor(private carService: CarService) {
  }

  @Get()
  showAllCars() {
    return this.carService.showAll();
  }

  @Post()
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
