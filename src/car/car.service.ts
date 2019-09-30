import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
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
    const car = await this.carRepository.findOne({ where: { id } });
    if (!car) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return car;
  }

  async update(id: string, data: Partial<CarDTO>) {
    let car = await this.carRepository.findOne({ where: { id } });
    if (!car) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.carRepository.update({ id }, data);
    car = await this.carRepository.findOne({ where: { id } });
    return car;
  }

  async destroy(id: string) {
    const car = await this.carRepository.findOne({ where: { id } });
    if (!car) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.carRepository.delete({ id });
    return car;
  }

}
