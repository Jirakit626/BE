import { Module } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { CoinsController } from './coins.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoCoin } from './entities/coin.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CryptoCoin])],
  controllers: [CoinsController],
  providers: [CoinsService],
})
export class CoinsModule {}
