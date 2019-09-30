import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarEntity } from './car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CarDTO } from './car.dto';

@Injectable()
export class CarService {

  constructor(@InjectRepository(CarEntity) private carRepository: Repository<CarEntity>) {
  }

  async showAll() {
    return await this.carRepository.find();
  }

  async create(data: CarDTO) {
    const car = await this.carRepository.create(data);
    await this.carRepository.save(car);
    return car;
  }

  async read(id: string) {
    return await this.carRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<CarDTO>) {
    await this.carRepository.update({ id }, data);
    return await this.carRepository.findOne({ id });
  }

  async destroy(id: string) {
    await this.carRepository.delete({ id });
    return { deleted: true };
  }

}
