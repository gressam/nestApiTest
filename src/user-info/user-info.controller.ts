import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { UserInfoDTO } from './user-info.dto';

@Controller('userInfo')
export class UserInfoController {
  constructor(private userInfoService: UserInfoService) {
  }

  @Get()
  getAll() {
    return this.userInfoService.getAll();
  }

  @Post()
  create(
    @Body() data: UserInfoDTO,
  ) {
    return this.userInfoService.create(data);
  }

  @Get(':id')
  getOne(
    @Param('id') id: number,
  ) {
    return this.userInfoService.getOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<UserInfoDTO>,
  ) {
    return this.userInfoService.update(id, data);
  }

  @Delete(':id')
  delete(
    @Param('id') id: number,
  ) {
    return this.userInfoService.delete(id);
  }
}
