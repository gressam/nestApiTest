import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDTO } from './address.dto';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {
  }

  @Get()
  getAll() {
    return this.addressService.getAll();
  }

  @Post()
  create(
    @Body() data: AddressDTO,
  ) {
    return this.addressService.create(data);
  }

  @Get(':id')
  getOne(
    @Param('id') id: number,
  ) {
    return this.addressService.getOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<AddressDTO>,
  ) {
    return this.addressService.update(id, data);
  }

  @Delete(':id')
  delete(
    @Param('id') id: number,
  ) {
    return this.addressService.delete(id);
  }
}
