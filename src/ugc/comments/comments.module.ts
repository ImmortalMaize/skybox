import { Module } from "@nestjs/common";
import { CorpsesModule } from "src/corpses/corpses.module";
import { BeepsModule } from "../beeps/beeps.module";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { UsersModule } from "src/ugc/users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { commentBox } from "./schemas/comment.sch";

@Module({
    imports: [CorpsesModule, BeepsModule, UsersModule, MongooseModule.forFeature([
        {
            name: 'Comment',
            schema: commentBox
        }
    ])],
    providers: [CommentsService],
    controllers: [CommentsController]
})

export class CommentsModule {}