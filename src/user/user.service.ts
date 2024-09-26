import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {
  @Inject(DbService)
  private readonly dbService: DbService;

  async regitserUser(regitserUserDto: RegisterUserDto) {
    // TODO: implement
    const users = await this.dbService.read();

    const hasUser = users.find(
      (user) => user.username === regitserUserDto.username,
    );

    if (hasUser) {
      throw new BadRequestException('username already exists');
    }

    const newUsers = [
      ...users,
      {
        ...regitserUserDto,
      },
    ];
    await this.dbService.write(newUsers);
    return {
      msg: 'ok',
    };
  }

  async loginUser(loginUserDto: RegisterUserDto) {
    const users = await this.dbService.read();

    const hasUser = users.find(
      (user) =>
        user.username === loginUserDto.username &&
        user.password === loginUserDto.password,
    );

    if (!hasUser) {
      throw new BadRequestException('username or password is incorrect');
    } else {
      return {
        token: '123',
      };
    }
  }
}
