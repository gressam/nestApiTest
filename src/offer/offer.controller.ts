import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OfferDTO } from './offer.dto';
import { OfferService } from './offer.service';

@Controller('offer')
export class OfferController {

  constructor(private offerService: OfferService) {
  }

  @Get()
  getAll() {
    return this.offerService.getAll();
  }

  @Post()
  create(
    @Body() data: OfferDTO,
  ) {
    return this.offerService.create(data);
  }

  @Get(':id')
  getOne(
    @Param('id') id: number,
  ) {
    return this.offerService.getOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<OfferDTO>,
  ) {
    return this.offerService.update(id, data);
  }

  @Delete(':id')
  delete(
    @Param('id') id: number,
  ) {
    return this.offerService.delete(id);
  }
}
