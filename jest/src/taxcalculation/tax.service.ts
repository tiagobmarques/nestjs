import { Injectable } from '@nestjs/common';
import { Tax } from './tax.entity';

@Injectable()
export class TaxService {
  taxs: Tax[] = [new Tax(1, new Date(), 50), new Tax(2, new Date(), 70)];

  findAll(): Tax[] {
    return this.taxs;
  }

  save(tax: Tax): Tax {
    tax.id = 3;
    return tax;
  }
}
