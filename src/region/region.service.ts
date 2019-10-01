import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegionEntity } from './region.entity';
import { Repository } from 'typeorm';
import { RegionDTO } from './region.dto';
import { elementAt } from 'rxjs/operators';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(RegionEntity) private regionRepository: Repository<RegionEntity>,
  ) {
  }

  async getAll() {
    const regions = await this.regionRepository.find({ relations: ['country'], cache: true });
    Logger.log(regions[0]);
    return regions.map(region => region.toResponseObject());
  }

  async create(data: RegionDTO) {
    const region = await this.regionRepository.create(data);
    await this.regionRepository.save(region);
    return region;
  }

  async getOne(id: number) {
    const region = await this.regionRepository.findOne({ where: { id } });
    if (!region) {
      throw new HttpException('Region not exists', HttpStatus.NOT_FOUND);
    }
    return region;
  }

  async update(id: number, data: Partial<RegionDTO>) {
    let region = await this.regionRepository.findOne({ where: { id } });
    if (!region) {
      throw new HttpException('Region not exists', HttpStatus.NOT_FOUND);
    }

    await this.regionRepository.update({ id }, data);
    region = await this.regionRepository.findOne({ where: { id } });
    return region;
  }

  async delete(id: number) {
    const region = await this.regionRepository.findOne({ where: { id } });
    if (!region) {
      throw new HttpException('Region not exists', HttpStatus.NOT_FOUND);
    }
    this.regionRepository.delete({ id });
    return 'Region deleted successful';
  }
}
