import { TaxController } from './tax.controller';
import { TaxService } from './tax.service';
import { Tax } from './tax.entity';
import { Test } from '@nestjs/testing';

describe('TaxController-Example1', () => {
  let taxController: TaxController;
  let taxService: TaxService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TaxController],
      providers: [TaxService],
    }).compile();

    taxService = moduleRef.get<TaxService>(TaxService);
    taxController = moduleRef.get<TaxController>(TaxController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const date = new Date();
      const taxs: Tax[] = [new Tax(1, date, 50), new Tax(2, date, 70)];
      jest.spyOn(taxService, 'findAll').mockImplementation(() => taxs);

      const taxs2: Tax[] = [new Tax(1, date, 50), new Tax(2, date, 70)];

      expect(taxController.findAll()).toStrictEqual(taxs2);
    });
  });
});
