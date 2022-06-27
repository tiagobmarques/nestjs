import { Module } from '@nestjs/common';
import { PhotoModule } from './photo/photo.module';
import { MerchantModule } from './merchant/merchant.module';

@Module({
  imports: [PhotoModule, MerchantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
