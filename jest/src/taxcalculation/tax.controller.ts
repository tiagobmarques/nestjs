import { Controller, Get } from '@nestjs/common';
import { TaxService } from './tax.service';
import { Tax } from './tax.entity';

@Controller('tax')
export class TaxController {
  constructor(private taxService: TaxService) {}

  @Get()
  findAll(): Tax[] {
    const taxes = this.taxService.findAll();
    // taxes.push(new Tax(3, new Date(), 50));
    return taxes;
  }
}
