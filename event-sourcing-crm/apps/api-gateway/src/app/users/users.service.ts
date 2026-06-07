import {Inject, Injectable} from '@nestjs/common';
import {RMQ_USERS_CLIENT_ID} from "../constants/constants";
import {ClientProxy} from "@nestjs/microservices";
import {CACHE_MANAGER} from "@nestjs/cache-manager";
import type {Cache} from "cache-manager";
import {UserDto} from "../dto/users/user.dto";
import {firstValueFrom} from "rxjs";
import {CreateUserDto, Role} from "../dto/users/create-user.dto";
import {UpdateUserDto} from "../dto/users/update-user.dto";

@Injectable()
export class UsersService {
  constructor(@Inject(RMQ_USERS_CLIENT_ID) private readonly client: ClientProxy, @Inject(CACHE_MANAGER) private readonly cache: Cache) {
  }

  async findAll(): Promise<UserDto[]> {
    const cachedUsers: UserDto[] | undefined = await this.cache.get("users:all");
    if (cachedUsers) {
      return cachedUsers
    }
    const result: UserDto[] = await firstValueFrom(this.client.send({cmd: "users.microservice: findAll"}, {}));
    await this.cache.set("users:all", result);
    return result;
  }

  async findOne(id: string): Promise<UserDto> {
    const cachedUser: UserDto | undefined = await this.cache.get(`users:${id}`);
    if (cachedUser) {
      return cachedUser
    }
    const result: UserDto = await firstValueFrom(this.client.send({cmd: "users.microservice: findOne"}, {id}))
    await this.cache.set(`users:${id}`, result);
    return result;
  }

  async findOneByEmail(email: string): Promise<UserDto> {
    const cachedUser: UserDto | undefined = await this.cache.get(`users:${email}`);
    if (cachedUser) {
      return cachedUser
    }
    const result: UserDto = await firstValueFrom(this.client.send({cmd: "users.microservice: findOneByEmail"}, {email}))
    await this.cache.set(`users:${email}`, result);
    return result;
  }

  async findByRole(role: Role): Promise<UserDto[]> {
    const cachedUsers: UserDto[] | undefined = await this.cache.get(`users:${role}`);
    if (cachedUsers) {
      return cachedUsers
    }
    const users: UserDto[] = await firstValueFrom(this.client.send({cmd: "users.microservice: findByRole"}, {role}))
    await this.cache.set(`users:${role}`, users);
    return users;
  }

  async createUser(dto: CreateUserDto): Promise<UserDto> {
    return await firstValueFrom(this.client.send({cmd: "users.microservice: createUser"}, {dto}))
  }

  async updateUser(dto: UpdateUserDto): Promise<void> {
    this.client.emit({cmd: "users.microservice: updateOne"}, {dto})
  }

  async deleteUser(id: string): Promise<void> {
    this.client.emit({cmd: "users.microservice: deleteOne"}, {id})
  }

}
