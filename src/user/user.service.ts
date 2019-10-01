import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  ) {
  }

  async showAll() {
    const users = await this.userRepository.find({ relations: ['userRole'], cache: true });
    return users.map(user => user.toResponseObject(false));
  }

  async login(data: UserDTO) {
    const { username, password } = data;

    const user = await this.userRepository.findOne({
      where: { username },
      relations: ['userRole'],
      cache: true,
    });

    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException('Invalid username/ password', HttpStatus.BAD_REQUEST);
    }

    return user.toResponseObject();
  }

  async register(data: UserDTO) {
    const { username } = data;
    let user = await this.userRepository.findOne({ where: { username } });

    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    user = await this.userRepository.create(data);
    await this.userRepository.save(user);
    user = await this.userRepository.findOne({where: {id: user.id}, relations: ['userRole'], cache: true});
    return user.toResponseObject();
  }

  async delete(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new HttpException('User not exists', HttpStatus.NOT_FOUND);
    }

    await this.userRepository.delete({ id });
    return user;
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({ where: { id }, relations: ['userRole'], cache: true });

    if (!user) {
      throw new HttpException('User not exists', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async getUserRoleByUsername(username: string){

    const user = await this.userRepository.findOne({ where: { username }, relations: ['userRole'], cache: true });

    if (!user) {
      throw new HttpException('User not exists', HttpStatus.NOT_FOUND);
    }

    return user.userRole;
  }

}
