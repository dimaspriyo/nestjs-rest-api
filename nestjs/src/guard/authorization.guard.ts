import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const rolesHandler = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    const rolesClass = this.reflector.get<string[]>(
      'roles',
      context.getClass(),
    );

    var allRoles = [];



    if (rolesHandler != undefined) {
      allRoles = allRoles.concat(rolesHandler);
    }

    if(rolesClass != undefined){
      allRoles = allRoles.concat(rolesClass)
    }


    var request = context.switchToHttp().getRequest();
    if( request.headers.authorization == undefined){
      throw new UnauthorizedException("Unauthorized"); 
    }
    const authToken = request.headers.authorization;
    const accessToken = authToken.split(' ')[1];

    var decode = this.jwtService.decode(accessToken);
    
    if(allRoles.includes(decode["role"]) == false ){
      throw new UnauthorizedException("Unauthorized"); 
    }

    return true;
  }
}
