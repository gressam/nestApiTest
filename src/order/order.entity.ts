import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { type } from 'os';
import { UserEntity } from '../user/user.entity';
import { AddressEntity } from '../address/address.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'bigint',
  })
  id: number;

  @CreateDateColumn()
  created: Date;

  @Column()
  customerId: number;

  @Column()
  executorId: number;

  @Column()
  price: number;

  @Column()
  addressId: number;

  @ManyToOne(() => AddressEntity, addressEntity => addressEntity.orders)
  @JoinColumn({ name: 'addressId' })
  address;

  @ManyToOne(() => UserEntity, userEntity => userEntity.creatingOrders)
  @JoinColumn({ name: 'customerId' })
  customer: UserEntity;

  @ManyToOne(() => UserEntity, userEntity => userEntity.executedOrders)
  @JoinColumn({ name: 'executorId' })
  execuror: UserEntity;
}
