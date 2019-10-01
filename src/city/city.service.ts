import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './city.entity';
import { Repository } from 'typeorm';
import { CityDTO } from './city.dto';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity) private cityRepository: Repository<CityEntity>,
  ) {
  }

  async getAll() {
    const cities =  await this.cityRepository.find({relations: ['region'], cache: true});
    return cities.map(city => city.toResponseObject());
  }

  async create(data: Partial<CityDTO>) {
    const city = await this.cityRepository.create(data);
    await this.cityRepository.save(city);
    return city;
  }

  async getOne(id: number) {
    const city = await this.cityRepository.findOne({ where: { id } });
    if (!city) {
      throw new HttpException('City not exists', HttpStatus.NOT_FOUND);
    }
    return city;
  }

  async update(id: number, data: Partial<CityDTO>) {
    let city = await this.cityRepository.findOne({ where: { id } });
    if (!city) {
      throw new HttpException('City not exists', HttpStatus.NOT_FOUND);
    }
    await this.cityRepository.update('id', data);
    city = await this.cityRepository.findOne({ where: { id } });
    return city;
  }

  async delete(id: number) {
    const city = await this.cityRepository.findOne({ where: { id } });
    if (!city) {
      throw new HttpException('City not exists', HttpStatus.NOT_FOUND);
    }
    await this.cityRepository.delete({ id });
    return 'City was successful deleted';
  }

}
