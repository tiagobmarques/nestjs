import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors
} from "@nestjs/common";
import { ClientService } from './client.service';
import { Client, Origin, Role } from "./client.entity";
import { UpdateClientDto } from "./client.update.entity";

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
/*
  @Get()
  getMerchant(): Client {
    return this.clientService.getMerchant();
  }*/

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Client {
    return new Client({
      id: 1,
      name: 'Tiago',
      whatsAppPhone: '489666666666',
      origin: Origin.WEB,
      role: new Role({
        name: 'ADMIN',
        allow: true,
      }),
    });
  }

  @Post()
  createClient(@Body() client: Client): Client {
    return this.clientService.createClient(client);
  }

  @Put()
  updateClient(@Body() client: UpdateClientDto): Client {
    return this.clientService.updateClient(client);
  }
}
