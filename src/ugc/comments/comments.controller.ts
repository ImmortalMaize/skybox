import { Controller, Post, Body, Req, Res, ParseIntPipe, Get } from "@nestjs/common";
import { ConclusionsService2 } from "src/corpses/conclusions.service2";
import { CommentsService } from "./comments.service";
import { commentSaveDTO } from "./schemas/comment.dto";

@Controller('c')
export class CommentsController {
    constructor(private conclusions2: ConclusionsService2, private service: CommentsService){}

    @Post()
    save(
        @Body() { author, text, re}: commentSaveDTO
    ){
        return this.service.save(author, text, re)
    }
    @Get()
    searchMany() {
        return this.service.search()
    }
}