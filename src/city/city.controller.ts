import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CityService } from './city.service';
import { CityDTO } from './city.dto';

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) {
  }

  @Get()
  getAll() {
    return this.cityService.getAll();
  }

  @Post()
  create(
    @Body() data: Partial<CityDTO>,
  ) {
    return this.cityService.create(data);
  }

  @Get(':id')
  getOne(
    @Param('id') id: number,
  ) {
    return this.cityService.getOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<CityDTO>,
  ) {
    return this.cityService.update(id, data);
  }

  @Delete(':id')
  delete(
    @Param('id') id: number,
  ) {
    return this.cityService.delete(id);
  }
}
