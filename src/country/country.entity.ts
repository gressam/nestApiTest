import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressEntity } from '../address/address.entity';
import { RegionEntity } from '../region/region.entity';

@Entity('country')
export class CountryEntity {
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

  @CreateDateColumn({
    name: 'crt_date',
  })
  createDate: Date;

  @OneToMany(() => AddressEntity, addressEntity => addressEntity.country, { cascade: true })
  addresses: AddressEntity[];

  @OneToMany(() => RegionEntity, regionEntity => regionEntity.country, { cascade: true })
  regions: RegionEntity[];
}
