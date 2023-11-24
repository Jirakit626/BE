import { Injectable } from '@nestjs/common';
import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CryptoCoin } from './entities/coin.entity';

@Injectable()
export class CoinsService {

  constructor(
    @InjectRepository(CryptoCoin)
    private CryptoCoinRepository: Repository<CryptoCoin>,
  ) { }


 async create(createCoinDto: CreateCoinDto) {
    const res = this.CryptoCoinRepository.create(createCoinDto);
    return await this.CryptoCoinRepository.save(res);
  }

  findAll() {
    return this.CryptoCoinRepository.find();
  }

  findOne(coinID: number): Promise<CryptoCoin | null> {
    return this.CryptoCoinRepository.findOneBy({ coinID });
  }

  findAllCoin(id: any): Promise<CryptoCoin[] | null> {
    return this.CryptoCoinRepository
    .createQueryBuilder('cryptoCoin')
    .leftJoinAndSelect('cryptoCoin.user', 'user')
    .select(['cryptoCoin.coinID', 'cryptoCoin.name', 'cryptoCoin.symbol', 'cryptoCoin.quantity'])
    .where('user.id = :id', { id })
    .getMany();
  }

  update(id: number, updateCoinDto: UpdateCoinDto) {
    return `This action updates a #${id} coin`;
  }

  remove(id: number) {
    return `This action removes a #${id} coin`;
  }
}
