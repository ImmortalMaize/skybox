import { Controller, Post, Body, Res, Get, Req, Delete, Response, Param, ParseIntPipe, UsePipes } from '@nestjs/common'
import {UsersService} from './users.service'
import {CorpsesService} from '../../corpses/corpses.service'
import { ConclusionsService2 } from '../../corpses/conclusions.service2'
import { userSaveDTO } from './schemas/users.dto';
import { EncodeTextPipe } from '../shared/pipes/encode.text.pipe';
import { emailBox } from '../shared/schemas/email.sch';
import { HashPipe } from '../shared/pipes/hash.pipe';
import { Password10Pipe } from '../shared/pipes/password.10.pipe';
import { UniqueEmailPipe } from '../shared/pipes/unique.email.pipe';

@Controller('u')
export class UsersController{
    constructor(private service: UsersService, private corpses: CorpsesService, private conclusions2: ConclusionsService2) {}

    @Post()
    async save(
        @Body('alias', EncodeTextPipe) alias: string,
        @Body('password', Password10Pipe, HashPipe) password: string,
        @Body('email', UniqueEmailPipe) email: string,
        @Body() { bio }
    ) {
        const user = await this.service.save(alias, email, password, bio);
        return user
    }
    @Get()
    searchAll() {
        return this.service.search()
    }
    @Post('crtxt')
    searchMany(@Body(EncodeTextPipe) input) {
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

    @Delete('/')
    async wasteOne(@Body() input) {
        return this.service.wasteOne(input)
    }

    @Delete('id@:id')
    async wasteId(
        @Param('id') id: number
    ) {
        return this.service.wasteOne({ publicId: id })
    }

    @Delete('hx@:id')
    async wasteHx(
        @Param('id') id
    ) {
        return this.service.wasteOne({ _id: id })
    }
}