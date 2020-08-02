import { Module } from '@nestjs/common'
import { CorpsesService } from './corpses.service';
import { ConclusionsService2 } from './conclusions.service2';
import { ConclusionsInter } from './conclusions.interceptor';

@Module({
    providers:[CorpsesService, ConclusionsService2, ConclusionsInter],
    exports:[CorpsesService, ConclusionsService2, ConclusionsInter]
})

export class CorpsesModule {}