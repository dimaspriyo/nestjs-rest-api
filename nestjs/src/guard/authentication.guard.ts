import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private readonly jwtService: JwtService,
    private reflector: Reflector
  ){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    console.log(process.env.JWT_SECRET);
    
    console.log(this.reflector.get<string>('key1',context.getHandler()));
    console.log(this.jwtService.sign('123'));
    

    // const req = context.switchToHttp().getRequest();
    // console.log(req);
    // this.jwtService.verify(req.)
    return true;
  }
}
