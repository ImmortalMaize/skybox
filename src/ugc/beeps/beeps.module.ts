import { Module } from '@nestjs/common'

import { BeepsController } from './beeps.controller'
import { BeepsService } from './beeps.service'
import { AuthModule } from 'src/auth/auth.module'
import { CorpsesModule } from 'src/corpses/corpses.module'
import { beepBox } from './schemas/beep.sch'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [AuthModule, CorpsesModule, MongooseModule.forFeature([
        {
            name: 'Beep',
            schema: beepBox
        }
    ])],  
    providers: [BeepsService],
    controllers: [BeepsController],
})

export class BeepsModule {}