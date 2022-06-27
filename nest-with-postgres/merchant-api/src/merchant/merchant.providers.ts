import { DataSource } from 'typeorm';
import { Merchant } from './merchant.entity';

export const merchantProviders = [
  {
    provide: 'MERCHANT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Merchant),
    inject: ['DATA_SOURCE'],
  },
];
