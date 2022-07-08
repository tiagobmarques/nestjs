import { TaxController } from './tax.controller';
import { TaxService } from './tax.service';
import { Tax } from './tax.entity';
import { Test } from '@nestjs/testing';

describe('TaxController-Example2', () => {
  let taxController: TaxController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TaxController],
    })
      .useMocker((token) => {
        if (token === TaxService) {
          const date: Date = new Date(2022, 1, 1, 10, 5, 10, 1);
          const taxs: Tax[] = [new Tax(1, date, 50), new Tax(2, date, 70)];
          return { findAll: jest.fn().mockImplementation(() => taxs) };
        }
      })
      .compile();

    taxController = moduleRef.get(TaxController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const date: Date = new Date(2022, 1, 1, 10, 5, 10, 1);
      const taxs2: Tax[] = [new Tax(1, date, 50), new Tax(2, date, 70)];
      expect(taxController.findAll()).toStrictEqual(taxs2);
    });
  });
});
