import { Injectable } from '@nestjs/common';
import { Client } from "./client.entity";
import { IsNotEmpty } from "class-validator";

@Injectable()
export class ClientService {
  getMerchant(): Client {
    return new Client(
      1,
      'TEste',
      'Teste',
      'Teste',
      'Teste',
      'Teste',
      true,
      'Teste',
      'Teste',
      new Date(),
    );
  }

  createClient(client: Client) {
    return client;
  }
}
