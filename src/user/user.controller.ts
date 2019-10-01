import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from '../shared/validation.pipe';
import { AuthGuard } from '../shared/auth.guard';
import { AdminGuard } from '../shared/admin.guard';

@Controller()
export class UserController {

  constructor(private userService: UserService) {

  }

  @Get('users')
  @UseGuards(AdminGuard)
  showAllUsers() {
    return this.userService.showAll();
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDTO) {
    return this.userService.login(data);
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTO) {
    return this.userService.register(data);
  }

  @Delete('users/:id')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  delete(
    @Param('id') id: number,
  ) {
    this.userService.delete(id);
  }
}
