import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserroleEntity } from '../userrole/userrole.entity';
import { OrderEntity } from '../order/order.entity';
import { UserInfoEntity } from '../user-info/user-info.entity';
import { OfferEntity } from '../offer/offer.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id: number;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  username: string;

  @Column('text')
  password: string;

  @Column('userRoleId')
  userRoleId: number;

  @Column()
  infoId;

  @ManyToOne(type => UserroleEntity, userrole => userrole.users, { cascade: true })
  @JoinColumn({ name: 'userRoleId' })
  userRole: UserroleEntity;

  @OneToMany(type => OrderEntity, order => order.customer, { cascade: true })
  creatingOrders: OrderEntity[];

  @OneToMany(type => OrderEntity, order => order.execuror, { cascade: true })
  executedOrders: OrderEntity[];

  @OneToOne(() => UserInfoEntity, info => info.user, { cascade: true })
  @JoinColumn({ name: 'infoId' })
  info: UserInfoEntity;

  @OneToMany(type => OfferEntity, offerEntity => offerEntity.order, { cascade: true })
  offers: OfferEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toResponseObject(showToken: boolean = true) {
    const { id, created, username, token, userRole: { name } } = this;
    return showToken ? { id, created, username, token, role: name } : { id, created, username, role: name };
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const { username, userRole: { name } } = this;
    return jwt.sign({ username, role: name }, process.env.SECRET, { expiresIn: '7d' });
  }
}
