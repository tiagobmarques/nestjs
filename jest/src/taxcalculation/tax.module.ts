import { Module } from '@nestjs/common';
import { TaxService } from './tax.service';
import { TaxController } from './tax.controller';

@Module({
  imports: [],
  controllers: [TaxController],
  providers: [TaxService],
})
export class TaxModule {}
