import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserService } from '../user/user.service';
import { UserroleEntity } from '../userrole/userrole.entity';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService) {

  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { username } = Object(await this.validateToken(request.headers.authorization));
    const currentUserRole: UserroleEntity = Object(await this.userService.getUserRoleByUsername(username));
    return currentUserRole.name === 'Admin';
  }

  async validateToken(auth: string) {

    if (!auth) {
      throw new HttpException('Authorization header is empty', HttpStatus.NOT_FOUND);
    }

    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    }

    const token = auth.split(' ')[1];
    try {
      const decode = jwt.verify(token, process.env.SECRET);
      return decode;
    } catch (err) {
      const message = 'Token error: ' + (err.message || err.name);
      throw new HttpException(message, HttpStatus.FORBIDDEN);
    }
  }
}
