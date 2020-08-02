import { Module } from '@nestjs/common'

import {UsersController} from './users.controller'
import {UsersService} from './users.service'
import {CorpsesModule} from '../../corpses/corpses.module'
import { MongooseModule } from '@nestjs/mongoose'
import { userBox } from './schemas/users.sch'

@Module({
    imports: [CorpsesModule, MongooseModule.forFeature([
        {
            name: 'User',
            schema: userBox
        }
    ])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
     
})

export class UsersModule {}