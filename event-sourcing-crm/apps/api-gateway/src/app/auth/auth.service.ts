import {Inject, Injectable} from '@nestjs/common';
import {RMQ_AUTH_CLIENT_ID} from "../constants/constants";
import {ClientProxy} from "@nestjs/microservices";
import {CACHE_MANAGER} from "@nestjs/cache-manager";
import type {Cache} from "cache-manager";

@Injectable()
export class AuthService {
  constructor(@Inject(RMQ_AUTH_CLIENT_ID) private readonly client: ClientProxy, @Inject(CACHE_MANAGER) private readonly cache: Cache) {
  }
}
