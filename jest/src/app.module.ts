import { Module } from '@nestjs/common';
import { TaxModule } from './taxcalculation/tax.module';

@Module({
  imports: [TaxModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
