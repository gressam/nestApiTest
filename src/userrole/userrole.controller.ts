import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserroleService } from './userrole.service';
import { UserroleDTO } from './userrole.dto';
import { AdminGuard } from '../shared/admin.guard';

@Controller('userrole')
export class UserroleController {

  constructor(private userroleService: UserroleService) {
  }

  @Get()
  getAll() {
    return this.userroleService.getAll();
  }

  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() data: UserroleDTO) {
    return this.userroleService.create(data);
  }

  @Get(':id')
  getOne(
    @Param('id') id: string,
  ) {
    return this.userroleService.getOne(id);
  }

  @Put(':id')
  @UseGuards(AdminGuard)
  @UsePipes(new ValidationPipe())
  update(
    @Param('id') id: string,
    @Body() data: Partial<UserroleDTO>,
  ) {
    return this.userroleService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  delete(@Param('id') id: string) {
    this.userroleService.delete(id);
  }
}
