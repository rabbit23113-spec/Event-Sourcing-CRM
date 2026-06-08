import {BadRequestException, Body, Controller, Get, Param, Post} from '@nestjs/common';
import {EventsService} from './events.service';
import {EventDto} from "../dto/events/event.dto";
import {CreateEventDto} from "../dto/events/create-event.dto";
import {ApiOperation, ApiParam, ApiResponse} from "@nestjs/swagger";
import {isUUID} from "class-validator";


@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {
  }

  @ApiOperation({summary: "Get events"})
  @ApiResponse({status: 200, type: EventDto, isArray: true})
  @Get("find")
  async findEvents(): Promise<EventDto[]> {
    return await this.eventsService.findAll()
  }

  @ApiOperation({summary: "Get event by id"})
  @ApiParam({
    name: 'id',
  })
  @ApiResponse({status: 200, type: EventDto})
  @Get("find/id/:id")
  async findOne(@Param("id") id: string): Promise<EventDto> {
    if (!isUUID(id)) throw new BadRequestException("Invalid UUID")
    return await this.eventsService.findOne(id)
  }

  @ApiOperation({summary: "Create event"})
  @ApiResponse({status: 201, type: EventDto})
  @Post("create")
  async createOne(@Body() body: CreateEventDto): Promise<EventDto> {
    return await this.eventsService.createOne(body);
  }
}
