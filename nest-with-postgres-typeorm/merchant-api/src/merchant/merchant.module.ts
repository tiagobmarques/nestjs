import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';
import { merchantProviders } from './merchant.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MerchantController],
  providers: [...merchantProviders, MerchantService, ],
})
export class MerchantModule {}
