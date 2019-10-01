import { HttpException, HttpStatus, Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserroleEntity } from './userrole.entity';
import { Repository } from 'typeorm';
import { UserroleDTO } from './userrole.dto';

@Injectable()
export class UserroleService {
  constructor(@InjectRepository(UserroleEntity) private userroleRepository: Repository<UserroleEntity>) {
  }

  async getAll() {
    return await this.userroleRepository.find();
  }

  async create(data: UserroleDTO) {
    const userrole = await this.userroleRepository.create(data);
    await this.userroleRepository.save(userrole);
    return userrole;
  }

  async getOne(id: string) {
    const userrole = await this.userroleRepository.findOne({ where: { id } });

    if (!userrole) {
      throw new HttpException('Role with that id not exists', HttpStatus.NOT_FOUND);
    }

    return userrole;
  }

  async update(id: string, data: Partial<UserroleDTO>) {
    let userrole = this.userroleRepository.findOne({ where: { id } });
    if (!userrole) {
      throw  new HttpException('Role with that id not exists', HttpStatus.NOT_FOUND);
    }
    await this.userroleRepository.update({ id }, data);
    userrole = this.userroleRepository.findOne({ where: { id } });
    return userrole;
  }

  async delete(id: string) {
    const userrole = this.userroleRepository.findOne({ where: { id } });

    if (!userrole) {
      throw new HttpException('Role with that id not exists', HttpStatus.NOT_FOUND);
    }
    await this.userroleRepository.delete({ id });
    return userrole;
  }
}
