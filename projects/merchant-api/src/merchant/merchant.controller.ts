import { Body, Controller, Get, Post } from "@nestjs/common";
import { Merchant } from './merchant.entity';
import { MerchantService } from './merchant.service';

@Controller('merchant')
export class MerchantController {
  constructor(private merchantService: MerchantService) {}

  @Get()
  async findAll(): Promise<Merchant[]> {
    return this.merchantService.findAll();
  }

  @Post()
  async create(@Body() merchant): Promise<Merchant> {
    return this.merchantService.save(merchant);
  }
}
