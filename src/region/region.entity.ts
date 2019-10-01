import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CountryEntity } from '../country/country.entity';
import { CityEntity } from '../city/city.entity';
import { AddressEntity } from '../address/address.entity';

@Entity('region')
export class RegionEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'bigint',
  })
  id: number;

  @Column({
    type: 'character',
    length: 128,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'country_id',
    nullable: false,
  })
  countryId: number;

  @CreateDateColumn({
    name: 'crt_date',
  })
  createDate: Date;

  @ManyToOne(() => CountryEntity, countryEntity => countryEntity.regions)
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;

  @OneToMany(() => CityEntity, cityEntity => cityEntity.region)
  cities: CityEntity[];

  @OneToMany(() => AddressEntity, addressEntiry => addressEntiry.region)
  addresses: AddressEntity[];

  toResponseObject(showToken: boolean = true) {
    const { id, name, createDate, country} = this;
    return { id, name, createDate, country: country.name};
  }
}
