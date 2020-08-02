import { SharedModule } from './ugc/shared/shared.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './ugc/users/users.module'
import { BeepsModule } from './ugc/beeps/beeps.module'
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './ugc/comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose'
require('dotenv').config()

@Module({
  imports: [
    SharedModule, UsersModule, BeepsModule, AuthModule, CommentsModule, MongooseModule.forRoot(`mongodb+srv://xac:${process.env.key}@cluster0-lhm9m.gcp.mongodb.net/mongobox2?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }

