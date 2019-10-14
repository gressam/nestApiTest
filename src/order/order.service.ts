import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { Repository } from 'typeorm';
import { OrderDTO } from './order.dto';

@Injectable()
export class OrderService {

  constructor(@InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>) {
  }

  async getAll() {
    return await this.orderRepository.find();
  }

  async create(data: OrderDTO) {
    const order = await this.orderRepository.create();
    await this.orderRepository.save(order);
    return order;
  }

  async getOne(id: number) {
    const order = await  this.orderRepository.find({ where: { id } });
    if (!order) {
      throw  new HttpException('Order not exists', HttpStatus.NOT_FOUND);
    }
    return order;
  }

  async update(id: number, data: Partial<OrderDTO>) {
    let order = await this.orderRepository.findOne({ where: { id } });
    if (!order) {
      throw  new HttpException('Order not exists', HttpStatus.NOT_FOUND);
    }
    await this.orderRepository.update({id}, data);
    order = await this.orderRepository.findOne({where: {id}});
    return order;
  }
  async delete(id:number) {
    const order = await  this.orderRepository.find({ where: { id } });
    if (!order) {
      throw  new HttpException('Order not exists', HttpStatus.NOT_FOUND);
    }
    await this.orderRepository.delete({id});
    return 'Order was deleted';
  }
}
