import { IsNotEmpty } from 'class-validator';

export class Tax {
  constructor(id: number, period: Date, payableValue: number) {
    this.id = id;
    this.period = period;
    this.payableValue = payableValue;
  }

  id: number;

  @IsNotEmpty()
  period: Date;

  payableValue: number;
}
