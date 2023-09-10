import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CourtsModule } from './courts/courts.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from './database/database.config';
import { AuthModule } from './auth/auth.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
