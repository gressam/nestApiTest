import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OfferEntity } from './offer.entity';
import { Repository } from 'typeorm';
import { OfferDTO } from './offer.dto';

@Injectable()
export class OfferService {
  constructor(@InjectRepository(OfferEntity) private offerRepository: Repository<OfferEntity>) {

  }

  async getAll() {
    return await this.offerRepository.find();
  }

  async create(data: OfferDTO) {
    const offer = await this.offerRepository.create(data);
    await this.offerRepository.save(offer);
    return offer;
  }

  async getOne(id: number) {
    const offer = await this.offerRepository.findOne({ where: { id }, relations: ['order', 'executor'] });

    if (!offer) {
      throw new HttpException('Offer not exists', HttpStatus.NOT_FOUND);
    }

    return offer;
  }

  async update(id: number, data: Partial<OfferDTO>) {
    let offer = await this.offerRepository.findOne({ where: { id }});

    if (!offer) {
      throw new HttpException('Offer not exists', HttpStatus.NOT_FOUND);
    }

    await this.offerRepository.update({ id }, data);

    offer = await this.offerRepository.findOne({ where: { id }, relations: ['order', 'executor'] });

    return offer;
  }

  async delete(id: number) {
    const offer = await this.offerRepository.findOne({ where: { id } });

    if (!offer) {
      throw new HttpException('Offer not exists', HttpStatus.NOT_FOUND);
    }

    await this.offerRepository.delete({ id });

    return 'Offer was successful deleted';
  }
}
