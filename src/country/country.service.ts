import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from './country.entity';
import { Repository } from 'typeorm';
import { CountryDTO } from './country.dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity) private countryRepository: Repository<CountryEntity>,
  ) {
  }

  async getAll() {
    return await this.countryRepository.find();
  }

  async create(data: CountryDTO) {
    const country = await this.countryRepository.create(data);
    await this.countryRepository.save(country);
    return country;
  }

  async getOne(id: number) {
    const country = await this.countryRepository.findOne({ where: { id } });
    if (!country) {
      throw new HttpException('Country not exists', HttpStatus.NOT_FOUND);
    }

    return country;
  }

  async update(id: number, data: Partial<CountryDTO>) {
    let country = await this.countryRepository.findOne({ where: { id } });

    if (!country) {
      throw  new HttpException('Country not exists', HttpStatus.NOT_FOUND);
    }

    await this.countryRepository.update({ id }, data);
    country = await this.countryRepository.findOne({ where: { id } });
    return country;
  }

  async delete(id: number) {
    const country = await this.countryRepository.findOne({ where: { id } });

    if (!country) {
      throw  new HttpException('Country not exists', HttpStatus.NOT_FOUND);
    }
    await this.countryRepository.delete({ id });
    return 'Delete successful';
  }
}
