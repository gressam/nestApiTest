import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {
  }

  @Get()
  getAll() {
    return this.orderService.getAll();
  }

  @Post()
  create(
    @Body() data: OrderDTO,
  ) {
    return this.orderService.create(data);
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.orderService.getOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<OrderDTO>,
  ) {
    return this.orderService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.orderService.delete(id);
  }
}
