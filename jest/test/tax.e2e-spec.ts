import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TaxService } from '../src/taxcalculation/tax.service';
import { TaxModule } from '../src/taxcalculation/tax.module';

describe('Tax', () => {
  let app: INestApplication;
  const taxs = [
    { id: 1, period: '2022-07-08T20:31:15.377Z', payableValue: 50 },
  ];
  const taxService = { findAll: () => taxs };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TaxModule],
    })
      .overrideProvider(TaxService)
      .useValue(taxService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET tax`, () => {
    return request(app.getHttpServer()).get('/tax').expect(200, taxs);
  });

  afterAll(async () => {
    await app.close();
  });
});
