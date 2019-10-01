import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './address.entity';
import { Repository } from 'typeorm';
import { AddressDTO } from './address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity) private addressRepository: Repository<AddressEntity>,
  ) {
  }

  async getAll() {
    return await this.addressRepository.find({ relations: ['country', 'region', 'city'], cache: true });
  }

  async create(data: AddressDTO) {
    const address = await this.addressRepository.create(data);
    await this.addressRepository.save(address);
    return address;
  }

  async getOne(id: number) {
    const address = await this.addressRepository.findOne({ where: { id } });
    if (!address) {
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }
    return address;
  }

  async update(id: number, data: Partial<AddressDTO>) {
    let address = await this.addressRepository.findOne({ where: { id } });
    if (!address) {
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }
    await this.addressRepository.update({ id }, data);
    address = await this.addressRepository.findOne({ where: { id } });
    return address;
  }

  async delete(id: number) {
    const address = await this.addressRepository.findOne({ where: { id } });
    if (!address) {
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }
    await this.addressRepository.delete(address);
    return 'Address delete successful';
  }

}
