import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Merchant } from './merchant.entity';

@Injectable()
export class MerchantService {
  constructor(
    @Inject('MERCHANT_REPOSITORY')
    private merchantRepository: Repository<Merchant>,
  ) {}

  async findAll(): Promise<Merchant[]> {
    return this.merchantRepository.find();
  }

  async save(merchant: Merchant): Promise<Merchant> {
    return this.merchantRepository.save(merchant);
  }
}