import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CryptoCoin } from '../../coins/entities/coin.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @OneToMany(() => CryptoCoin, cryptoCoin => cryptoCoin.user)
  cryptoCoins: CryptoCoin[];

}
