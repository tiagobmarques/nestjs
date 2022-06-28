import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getMerchant(): Client {
    return this.clientService.getMerchant();
  }

  @Post()
  createClient(@Body() client: Client): Client {
    return this.clientService.createClient(client);
  }
}
