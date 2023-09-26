import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CourtsModule } from './courts/courts.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from './database/database.config';
import { AuthModule } from './auth/auth.module';
import { AddressModule } from './address/address.module';
import { ImagesCourtModule } from './images-court/images-court.module';
import { BookingsModule } from './bookings/bookings.module';
import { TimeSlotsModule } from './time-slots/time-slots.module';
import { SlotAvailabilityModule } from './slot-availability/slot-availability.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DB_TYPE: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        // JWT_ACCESS_TOKEN_SECRET:Joi.string().required(),
        // JWT_ACCESS_TOKEN_EXPIRATION:Joi.string().required(),
        // JWT_REFRESH_TOKEN_SECRET:Joi.string().required(),
        // JWT_REFRESH_TOKEN_EXPIRATION:Joi.string().required(),
      }),
    }),
    DatabaseModule,
    UsersModule,
    CourtsModule,
    AuthModule,
    AddressModule,
    ImagesCourtModule,
    BookingsModule,
    TimeSlotsModule,
    SlotAvailabilityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
