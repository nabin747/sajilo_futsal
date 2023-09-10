// jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants/constant';
// import { JwtPayload } from './jwt-payload.interface'; // Define this interface

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:jwtConstants.secret ,
    });
  }

  async validate(payload: any) {
    return payload;
    // Implement user validation logic here
    // Return user information if valid, otherwise throw an UnauthorizedException
    // Example: Find user in the database based on payload.sub (user ID)
    // If user is not found or is invalid, throw new UnauthorizedException
    // If user is valid, return the user object
  }
}
