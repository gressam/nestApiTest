import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { HttpErrorFilter } from '../shared/http-error.filter';
import { RegionService } from './region.service';
import { RegionDTO } from './region.dto';

@Controller('region')
export class RegionController {
  constructor(private regionService: RegionService) {

  }

  @Get()
  getAll() {
    return this.regionService.getAll();
  }

  @Post()
  @UsePipes(HttpErrorFilter)
  create(@Body() data: RegionDTO,
  ) {
    return this.regionService.create(data);
  }

  @Get(':id')
  getOne(
    @Param('id') id: number,
  ) {
    return this.regionService.getOne(id);
  }

  @Put(':id')
  @UsePipes(HttpErrorFilter)
  update(
    @Param('id') id: number,
    @Body() data: Partial<RegionDTO>,
  ) {
    return this.regionService.update(id, data);
  }

  @Delete(':id')
  delete(
    @Param('id') id: number,
  ) {
    return this.regionService.delete(id);

  }

}
