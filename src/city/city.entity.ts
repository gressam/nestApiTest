import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RegionEntity } from '../region/region.entity';
import { AddressEntity } from '../address/address.entity';

@Entity('city')
export class CityEntity {
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
    name: 'region_id',
    nullable: false,
  })
  regionId: number;

  @CreateDateColumn()
  createDate: Date;

  @ManyToOne(() => RegionEntity, regionEntity => regionEntity.cities)
  @JoinColumn({ name: 'region_id' })
  region: RegionEntity;

  @OneToMany(() => AddressEntity, addressEntity => addressEntity.city)
  addresses: AddressEntity[];

  toResponseObject() {
    const {id, name, regionId, region, createDate} = this;
    return {id, name, regionId, region: region.name, createDate};
  }
}
