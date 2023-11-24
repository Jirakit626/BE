import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class CryptoCoin {
  @PrimaryGeneratedColumn()
  coinID: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column()
  quantity: number;

  @ManyToOne(() => User, user => user.cryptoCoins)
  user: User;
}