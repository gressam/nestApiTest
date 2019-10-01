import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryDTO } from './country.dto';
import { HttpErrorFilter } from '../shared/http-error.filter';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {

  }

  @Get()
  getAll() {
    return this.countryService.getAll();
  }

  @Post()
  @UsePipes(HttpErrorFilter)
  create(@Body() data: CountryDTO,
  ) {
    return this.countryService.create(data);
  }

  @Get(':id')
  getOne(
    @Param('id') id: number,
  ) {
    return this.countryService.getOne(id);
  }

  @Put(':id')
  @UsePipes(HttpErrorFilter)
  update(
    @Param('id') id: number,
    @Body() data: CountryDTO,
  ) {
    return this.countryService.update(id, data);
  }

  @Delete(':id')
  delete(
    @Param('id') id: number,
  ) {
    return this.countryService.delete(id);

  }

}
