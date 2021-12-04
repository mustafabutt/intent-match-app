import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { User } from '../schemas/users.schema';
import { UsersService } from '../services/users.service';
import { Exceptions } from '../exceptions/exceptions';
import { globalConstants } from '../constant';

@Controller(globalConstants.USERS)
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private exceptions: Exceptions,
  ) {}

  @Post()
  async createUser(@Res() response, @Body() user: User) {
    try {
      const users = await this.userService.readAll();
      const match = await this.userService.match(user, users);
      return response.status(HttpStatus.CREATED).json({
        match,
      });
    } catch (err) {
      this.exceptions.generateGeneralException(err);
    }
  }

  @Get()
  async fetchAll(@Res() response) {
    try {
      const users = await this.userService.readAll();
      return response.status(HttpStatus.OK).json({
        users,
      });
    } catch (err) {
      this.exceptions.generateGeneralException(err);
    }
  }
}
