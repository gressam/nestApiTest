import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('car')
export class CarEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  }) id: string;

  @CreateDateColumn() created: Date;

  @Column('text') brand: string;

  @Column('text') model: string;
}
