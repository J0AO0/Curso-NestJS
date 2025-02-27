import { IsEmail } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 255 })
  passwordHash: string;

  @CreateDateColumn()
  criatedAt?: Date;

  @CreateDateColumn()
  updatedAt?: Date;
}
