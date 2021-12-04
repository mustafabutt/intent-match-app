import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { globalConstants } from '../constant';
import {
  Get_Gender_Interest_Based_List,
  Get_Age_Based_List,
  Get_Race_Based_List,
  Get_Location_Based_List,
  Get_Hobbies_Based_List,
} from '../utils/utils';

@Injectable()
export class UsersService {
  constructor() {}

  async match(user, users): Promise<any> {
    const Get_Gender_Interest_Based_Users = Get_Gender_Interest_Based_List(
      user,
      users,
    );
    const Get_Age_Based_Users = Get_Age_Based_List(
      user,
      Get_Gender_Interest_Based_Users,
    );
    const Get_Race_Based_Users = Get_Race_Based_List(user, Get_Age_Based_Users);
    const Get_Location_Based_Users = Get_Location_Based_List(
      user,
      Get_Race_Based_Users,
    );
    const Get_Hobies_Based_Users = Get_Hobbies_Based_List(
      user,
      Get_Location_Based_Users,
    );
    if(Get_Hobies_Based_Users.length > 0)
      return Get_Hobies_Based_Users;
    else return globalConstants.NO_MATCH_FOUND;
  }

  async readAll(): Promise<any> {

    const data = await fs.readFile(
      process.cwd() + globalConstants.DATAFILE,
      'utf8',
    );
    return JSON.parse(data);

  }
}
