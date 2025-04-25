import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @Column({unique: true})
  email: string;

  @Column({unique: true})
  phone: string;

  @Column({unique: true})
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
