import { Exclude, Expose, Transform } from "class-transformer";

export enum Origin {
  WEB = 'WEB',
  ANDROID = 'ANDROID',
}

export class Role {
  constructor(partial: Partial<Role>) {
    Object.assign(this, partial);
  }

  name: string;
  allow: boolean;
}

export class Client {
  constructor(partial: Partial<Client>) {
    Object.assign(this, partial);
  }

  id: number;

  name: string;

  @Exclude()
  whatsAppPhone: string;

  origin: string;

  @Expose({
    name: 'permissions',
  })
  role: Role;

  createDate: Date;
}
