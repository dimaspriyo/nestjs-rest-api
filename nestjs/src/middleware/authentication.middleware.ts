import { BadRequestException, HttpStatus, Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  use(req: Request, res: Response, next: () => void) {

    const authorizationHeader = req.headers.authorization

    if ( authorizationHeader == undefined) {
      res.status(HttpStatus.BAD_REQUEST).json('JWT is Not Valid');
    } else {
      try {
        const token = authorizationHeader.split(' ')[1];
        this.jwtService.verify(token);
      } catch (error) {
        throw new BadRequestException("Token Is Not Valid");
        
      }
      next();
    }
  }
}
