import {Inject, Injectable} from '@nestjs/common';
import {RMQ_CLIENTS_CLIENT_ID} from "../constants/constants";
import {ClientProxy} from "@nestjs/microservices";
import {CACHE_MANAGER} from "@nestjs/cache-manager";
import type {Cache} from "cache-manager";
import {firstValueFrom} from "rxjs";
import {UpdateClientDto} from "../dto/clients/update-client.dto";
import {CreateClientDto} from "../dto/clients/create-client.dto";
import {ClientDto} from "../dto/clients/client.dto";

@Injectable()
export class ClientsService {
  constructor(@Inject(RMQ_CLIENTS_CLIENT_ID) private readonly client: ClientProxy, @Inject(CACHE_MANAGER) private readonly cache: Cache) {
  }

  async findAll(): Promise<ClientDto[]> {
    const cachedClients: ClientDto[] | undefined = await this.cache.get("clients:all")
    if (cachedClients) {
      return cachedClients;
    }
    const clients = await firstValueFrom(this.client.send({cmd: "clients.microservice: findAll"}, {}))
    await this.cache.set("clients:all", clients);
    return clients;
  }

  async findOne(id: string): Promise<ClientDto> {
    const cachedLead: ClientDto | undefined = await this.cache.get(`clients:${id}`);
    if (cachedLead) {
      return cachedLead
    }
    const lead = await firstValueFrom(this.client.send({cmd: "clients.microservice: findOne"}, {id}))
    await this.cache.set(`clients:${id}`, lead);
    return lead
  }

  async findByCompanyName(companyName: string): Promise<ClientDto[]> {
    const cachedClients: ClientDto[] | undefined = await this.cache.get(`clients:${companyName}`);
    if (cachedClients) {
      return cachedClients;
    }
    const clients = await firstValueFrom(this.client.send({cmd: "clients.microservice: findByCompanyName"}, {companyName}))
    await this.cache.set(`clients:${companyName}`, clients);
    return clients
  }

  async findOneByName(name: string): Promise<ClientDto> {
    const cachedLead: ClientDto | undefined = await this.cache.get(`clients:${name}`);
    if (cachedLead) {
      return cachedLead
    }
    const lead = await firstValueFrom(this.client.send({cmd: "clients.microservice: findOneByName"}, {name}))
    await this.cache.set(`clients:${name}`, lead);
    return lead
  }

  async createOne(dto: CreateClientDto): Promise<ClientDto> {
    return await firstValueFrom(this.client.send({cmd: "clients.microservice: createOne"}, {dto}))
  }

  async updateOne(dto: UpdateClientDto): Promise<void> {
    return await firstValueFrom(this.client.emit({cmd: "clients.microservice: updateOne"}, {dto}))
  }

  async deleteOne(id: string): Promise<void> {
    return await firstValueFrom(this.client.emit({cmd: "clients.microservice: deleteOne"}, {id}))
  }
}
