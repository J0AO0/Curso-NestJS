import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Recado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  texto: string;

  //muitos recados podem ser enviados por uma unica pessoa (emissor)
  @ManyToOne(() => Pessoa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  //especifica a coluna "de" que armazena o ID da pessoa que enviou o recado
  @JoinColumn({ name: 'de' })
  de: Pessoa;

  //muitos recados podem ser enviados para uma unica pessoa (destinatario)
  @ManyToOne(() => Pessoa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  //especifica a coluna "de" que armazena o ID da pessoa que recebeu o recado
  @JoinColumn({ name: 'para' })
  para: Pessoa;

  @Column({ default: false })
  lido: boolean;

  @Column()
  data: Date;

  @CreateDateColumn()
  createdAt?: Date; //createdAt

  @UpdateDateColumn()
  updatedAt?: Date; //updatedAt
}
