import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import EventEntity from "./entities/event.entity";
import {Repository} from "typeorm";
import {CreateEventDto} from "./dto/create-event.dto";
import type {Cache} from "cache-manager";
import {CACHE_MANAGER} from "@nestjs/cache-manager";


@Injectable()
export class AppService {
  constructor(@InjectRepository(EventEntity) private readonly eventsRepo: Repository<EventEntity>, @Inject(CACHE_MANAGER) private readonly cache: Cache) {
  }

  async findAll(): Promise<EventEntity[]> {
    const result: EventEntity[] | undefined = await this.cache.get("events:all")
    if (result) {
      return result
    }
    const events: EventEntity[] = await this.eventsRepo.find()
    if (!events) throw new NotFoundException("No events found");
    await this.cache.set("events:all", events);
    return events;
  }

  async findOne(id: string): Promise<EventEntity> {
    const result: EventEntity | undefined = await this.cache.get(`events:${id}`)
    if (result) {
      return result
    }
    const target: EventEntity | null = await this.eventsRepo.findOneBy({id})
    if (!target) throw new NotFoundException("Not found");
    await this.cache.set(`events:${id}`, target);
    return target;
  }

  async createOne(dto: CreateEventDto): Promise<EventEntity> {
    const target: EventEntity = this.eventsRepo.create(dto);
    await this.eventsRepo.save(target);
    return target
  }
}
