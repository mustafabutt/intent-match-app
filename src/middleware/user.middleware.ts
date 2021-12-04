import { Injectable, NestMiddleware, UseGuards } from '@nestjs/common';
import { Exceptions } from '../exceptions/exceptions';
import { globalConstants } from '../constant';

@Injectable()
export class UserMiddleware implements NestMiddleware {

  constructor(private exceptions: Exceptions) {
  }
  use(req: any, res: any, next: () => void) {
    if (req.method === globalConstants.POST) {
      if (
        req.body.hasOwnProperty(globalConstants.USERNAME) &&
        req.body.hasOwnProperty(globalConstants.AGE) &&
        req.body.hasOwnProperty(globalConstants.RACE) &&
        req.body.hasOwnProperty(globalConstants.GENDER) &&
        req.body.hasOwnProperty(globalConstants.LOCATION) &&
        req.body.hasOwnProperty(globalConstants.HOBBiES) &&
        req.body.hasOwnProperty(globalConstants.INTEREST)
      )
        next();
      else this.exceptions.generateBadRequestException();
    } else next();
  }
}
