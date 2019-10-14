import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes } from '@nestjs/common';
import { CityService } from './city.service';
import { CityDTO } from './city.dto';
import { AdminGuard } from '../shared/admin.guard';
import { HttpErrorFilter } from '../shared/http-error.filter';

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) {
  }

  @Get()
  getAll() {
    return this.cityService.getAll();
  }

  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(HttpErrorFilter)
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
  @UseGuards(AdminGuard)
  update(
    @Param('id') id: number,
    @Body() data: Partial<CityDTO>,
  ) {
    return this.cityService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  delete(
    @Param('id') id: number,
  ) {
    return this.cityService.delete(id);
  }
}
