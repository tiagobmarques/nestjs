import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Contains, IsEmail, IsNotEmpty, Min } from "class-validator";

@Entity()
export class Merchant {
  @PrimaryGeneratedColumn({ name: 'idt_merchant' })
  id: number;

  @Column({ name: 'idt_customer' })
  customerId: string;

  @Column({ name: 'idt_tenant' })
  tenantId: string;

  @Column({ name: 'idt_user' })
  userId: string;

  @IsNotEmpty()
  @Contains('hello')
  @Column({ length: 500, name: 'nam_assumed_name' })
  name: string;

  @Column({ length: 50, name: 'des_slug' })
  slug: string;

  @Column({ name: 'flg_delivery' })
  delivery: boolean;

  @Column({ name: 'des_whats_app_phone' })
  whatsAppPhone: string;

  @Column({ name: 'flg_origin' })
  origin: string;
}
