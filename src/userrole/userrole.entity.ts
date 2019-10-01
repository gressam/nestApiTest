import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('userrole')
export class UserroleEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  name: string;

  @ManyToOne(type => UserEntity, user => user.userRole)
  users: UserEntity[];

}
