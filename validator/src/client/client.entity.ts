import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IsLongerThan } from '../commons/islongerthan.validate';

export enum Origin {
  WEB = 'WEB',
  ANDROID = 'ANDROID',
}

export class Client {
  constructor(
    id: number,
    customerId: string,
    tenantId: string,
    userId: string,
    name: string,
    slug: string,
    delivery: boolean,
    whatsAppPhone: string,
    origin: string,
    createDate: Date,
  ) {
    this.id = id;
    this.customerId = customerId;
    this.tenantId = tenantId;
    this.userId = userId;
    this.name = name;
    this.slug = slug;
    this.delivery = delivery;
    this.whatsAppPhone = whatsAppPhone;
    this.origin = origin;
    this.createDate = createDate;
  }

  @IsNumber({}, { message: 'Not is a number' })
  id: number;

  @Length(40, 42)
  @IsNotEmpty()
  customerId: string;

  @IsNotEmpty()
  tenantId: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty({ message: 'Name cannot should be null' })
  @IsLongerThan('slug', {
    /* you can also use additional validation options, like "groups" in your custom validation decorators. "each" is not supported */
    message: 'Name must be longer than the slug',
  })
  name: string;

  @ValidateIf((object) => object.name === 'teste')
  @IsNotEmpty()
  slug: string;

  @IsBoolean()
  delivery: boolean;

  @IsOptional()
  whatsAppPhone: string;

  @IsNotEmpty()
  // @IsIn(['WEB', 'ANDROID'])
  @IsEnum(Origin)
  origin: string;

  @IsDate()
  @Type(() => Date)
  createDate: Date;
}
