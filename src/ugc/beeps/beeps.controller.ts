import { UseGuards, Controller, Body, Delete, Post, Get, Param, BadRequestException, UseInterceptors, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common'
import { BeepsService } from './beeps.service'
import { AuthGuard } from '@nestjs/passport'
import { ConclusionsInter } from 'src/corpses/conclusions.interceptor'
import { ConclusionsService2 } from 'src/corpses/conclusions.service2'
import { beepSaveDTO } from './schemas/beep.save.dto'

@Controller('b')
export class BeepsController {
    constructor(private service: BeepsService, private conclusions2: ConclusionsService2) {}

    //@UseGuards(AuthGuard('jwt'))
    @UseInterceptors(ConclusionsInter)
    @Post()
    save(@Body() input: beepSaveDTO) {
        const res = this.service.save(input.title, input.author, input.blurb, input.tags)
        return res
    }

    @Get()
    searchAll() {
        return this.service.search()
    }
    @Post('crtxt')
    searchMany(@Body() input) {
        return this.service.search(input)
    }
    @Get('id@:id')
    searchId(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.service.searchOne({ publicId: id })
    }
    @Get('hx@:id')
    searchHx(
        @Param('id') id
    ) {
        return this.service.searchOne({ _id: id })
    }

    @Delete()
    async wasteOne(@Body() input) {
        return this.service.wasteOne(input)
    }

    @Delete('id@:id')
    async wasteId(
        @Param('id') id
    ) {
        return this.service.waste({ publicId: id })
    }

    @Delete('hx@:id')
    async wasteHx(
        @Param('id') id
    ) {
        return this.service.waste({ _id: id })
    }
}