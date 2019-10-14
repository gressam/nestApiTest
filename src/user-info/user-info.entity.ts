import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AddressEntity } from '../address/address.entity';
import { UserEntity } from '../user/user.entity';

@Entity()
export class UserInfoEntity {

  @PrimaryGeneratedColumn(
    {
      name: 'id',
      type: 'bigint',
    },
  )
  id: number;

  @Column()
  name: string;

  @Column()
  surName: string;

  @Column()
  phoneNumber: string;

  @Column()
  userId: number;

  @OneToMany(() => AddressEntity, addressEntity => addressEntity.userInfo)
  addresses: AddressEntity[];

  @OneToOne(() => UserEntity, userEntity => userEntity.info)
  @JoinColumn({
    name: 'userId',
  })
  user: UserEntity;
}
