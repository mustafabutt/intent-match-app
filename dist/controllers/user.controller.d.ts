import { User } from '../schemas/users.schema';
import { UsersService } from '../services/users.service';
import { Exceptions } from '../exceptions/exceptions';
export declare class UserController {
    private readonly userService;
    private exceptions;
    constructor(userService: UsersService, exceptions: Exceptions);
    createUser(response: any, user: User): Promise<any>;
    fetchAll(response: any): Promise<any>;
}
