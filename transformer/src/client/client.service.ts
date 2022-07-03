import { Injectable } from '@nestjs/common';
import { Client } from './client.entity';
import { UpdateClientDto } from "./client.update.entity";

@Injectable()
export class ClientService {
/*  getMerchant(): Client {
    return new Client(1, 'TEste', 'Teste', 'Teste', new Date());
  }*/

  createClient(client: Client) {
    client.id = 1;
    return client;
  }

  updateClient(client: UpdateClientDto) {
    return undefined;
  }
}
