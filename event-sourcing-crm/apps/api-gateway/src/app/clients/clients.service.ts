import {Inject, Injectable} from '@nestjs/common';
import {RMQ_CLIENTS_CLIENT_ID} from "../constants/constants";
import {ClientProxy} from "@nestjs/microservices";
import {firstValueFrom} from "rxjs";
import {UpdateClientDto} from "../dto/clients/update-client.dto";
import {CreateClientDto} from "../dto/clients/create-client.dto";
import {ClientDto} from "../dto/clients/client.dto";

@Injectable()
export class ClientsService {
  constructor(@Inject(RMQ_CLIENTS_CLIENT_ID) private readonly client: ClientProxy) {
  }

  async findAll(): Promise<ClientDto[]> {
    return await firstValueFrom(this.client.send({cmd: "clients.microservice: findAll"}, {}))
  }

  async findOne(id: string): Promise<ClientDto> {
    return await firstValueFrom(this.client.send({cmd: "clients.microservice: findOne"}, {id}))
  }

  async findByCompanyName(companyName: string): Promise<ClientDto[]> {
    return await firstValueFrom(this.client.send({cmd: "clients.microservice: findByCompanyName"}, {companyName}))
  }

  async findOneByName(name: string): Promise<ClientDto> {
    return await firstValueFrom(this.client.send({cmd: "clients.microservice: findOneByName"}, {name}))
  }

  async createOne(dto: CreateClientDto): Promise<ClientDto> {
    return await firstValueFrom(this.client.send({cmd: "clients.microservice: createOne"}, {dto}))
  }

  async updateOne(dto: UpdateClientDto): Promise<void> {
    this.client.emit({cmd: "clients.microservice: updateOne"}, {dto})
  }

  async deleteOne(id: string): Promise<void> {
    this.client.emit({cmd: "clients.microservice: deleteOne"}, {id})
  }
}
