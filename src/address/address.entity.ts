import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from '../order/order.entity';
import { CountryEntity } from '../country/country.entity';
import { RegionEntity } from '../region/region.entity';
import { CityEntity } from '../city/city.entity';
import { UserInfoEntity } from '../user-info/user-info.entity';
import { userInfo } from 'os';

@Entity('address')
export class AddressEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'bigint',
  })
  id: number;

  @Column()
  countryId: number;

  @Column()
  regionId: number;

  @Column()
  cityId: number;

  @Column()
  street: string;

  @Column()
  houseNumber: string;

  @Column()
  flat: number;

  @Column()
  userInfoId;

  @OneToMany(() => OrderEntity, orderEntity => orderEntity.address)
  orders: OrderEntity[];

  @ManyToOne(() => CountryEntity, coutryEntity => coutryEntity.addresses)
  @JoinColumn({ name: 'countryId' })
  country: CountryEntity;

  @ManyToOne(() => RegionEntity, regionEntity => regionEntity.addresses)
  @JoinColumn({ name: 'regionId' })
  region: RegionEntity;

  @ManyToOne(() => CityEntity, cityEntity => cityEntity.addresses)
  @JoinColumn({ name: 'cityId' })
  city: CityEntity;

  @ManyToOne(() => UserInfoEntity, userInfoEntity => userInfoEntity.addresses)
  @JoinColumn({ name: 'userInfoId' })
  userInfo;
}
