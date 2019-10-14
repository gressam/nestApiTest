import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from '../order/order.entity';
import { UserEntity } from '../user/user.entity';

@Entity()
export class OfferEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column()
  price: number;

  @CreateDateColumn()
  creatingDate: Date;

  @Column()
  executionDate: Date;

  @Column()
  orderId: number;

  @Column()
  status: string;

  @Column()
  executorId: number;

  @ManyToOne(type => OrderEntity, orderEntity => orderEntity.offers)
  @JoinColumn({ name: 'orderId' })
  order: OrderEntity;

  @ManyToOne(type => UserEntity, userEntity => userEntity.offers)
  @JoinColumn({ name: 'executorId' })
  executor: UserEntity;
}
