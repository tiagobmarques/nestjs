import { DataSource } from 'typeorm';
import { Photo } from '../photo/photo.entity';
import { Merchant } from '../merchant/merchant.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'merchant_nest_db',
        entities: [Photo, Merchant],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];