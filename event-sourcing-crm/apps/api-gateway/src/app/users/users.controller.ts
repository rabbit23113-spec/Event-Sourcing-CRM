import {Body, Controller, Delete, Get, Param, Post, Query} from '@nestjs/common';
import {UsersService} from './users.service';
import {ApiOperation, ApiQuery, ApiResponse} from "@nestjs/swagger";
import {UserDto} from "../dto/users/user.dto";
import {CreateUserDto} from "../dto/users/create-user.dto";
import {UpdateUserDto} from "../dto/users/update-user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @ApiOperation({summary: "Get all users, one by id or by email"})
  @ApiQuery({
    name: 'id',
    type: 'string',
    required: false,
  })
  @ApiQuery({
    name: 'email',
    type: 'string',
    required: false,
  })
  @ApiResponse({status: 200, type: UserDto, isArray: true})
  @Get("find")
  async findEvents(@Query("id") id: string, @Query("email") email: string): Promise<UserDto[] | UserDto> {
    if (id) {
      return await this.usersService.findOne(id)
    } else if (email) {
      return await this.usersService.findOneByEmail(email);
    } else {
      return await this.usersService.findAll()
    }
  }

  @ApiOperation({summary: "Create user"})
  @ApiResponse({status: 201, type: UserDto})
  @Post("create")
  async createUser(@Body() body: CreateUserDto): Promise<UserDto> {
    return await this.usersService.createUser(body);
  }

  @ApiOperation({summary: "Update user"})
  @ApiResponse({status: 204})
  @Post("update")
  async updateOne(@Body() body: UpdateUserDto): Promise<void> {
    await this.usersService.updateUser(body);
  }

  @ApiOperation({summary: "Delete user"})
  @ApiResponse({status: 204})
  @Delete("delete/:id")
  async deleteOne(@Param("id") id: string): Promise<void> {
    await this.usersService.deleteUser(id);
  }
}
