import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInfoEntity } from './user-info.entity';
import { Repository } from 'typeorm';
import { UserInfoDTO } from './user-info.dto';

@Injectable()
export class UserInfoService {
  constructor(@InjectRepository(UserInfoEntity) private userInfoRepository: Repository<UserInfoEntity>) {
  }

  async getAll() {
    return await this.userInfoRepository.find({ relations: ['addresses'] });
  }

  async create(data: UserInfoDTO) {
    const userInfo = await this.userInfoRepository.create(data);
    await this.userInfoRepository.save(userInfo);
    return userInfo;
  }

  async getOne(id: number) {
    const userInfo = await this.userInfoRepository.findOne({ where: { id } });

    if (!userInfo) {
      throw new HttpException('Userinfo not exists', HttpStatus.NOT_FOUND);
    }

    return userInfo;
  }

  async update(id: number, data: Partial<UserInfoDTO>) {
    let userInfo = await this.userInfoRepository.findOne({ where: { id } });

    if (!userInfo) {
      throw new HttpException('Userinfo not exists', HttpStatus.NOT_FOUND);
    }

    this.userInfoRepository.update({ id }, data);
    userInfo = await this.userInfoRepository.findOne({ where: { id } });
    return userInfo;
  }

  async delete(id: number) {
    const userInfo = await this.userInfoRepository.findOne({ where: { id } });

    if (!userInfo) {
      throw new HttpException('Userinfo not exists', HttpStatus.NOT_FOUND);
    }

    this.userInfoRepository.delete({ id });
    return 'User info was successful delete';
  }
}
