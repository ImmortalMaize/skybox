import { Injectable } from "@nestjs/common";
import { Comment } from "./schemas/comment.sch";
import { commentSaveDTO } from "./schemas/comment.dto";
import { ConclusionsService2 } from "src/corpses/conclusions.service2";
import moment from 'moment'
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'

@Injectable()
export class CommentsService {
    constructor(private conclusions2: ConclusionsService2, @InjectModel('Comment') private model: Model<Comment>){}
    comments: Comment[] = []

    async save(author: number, text: string, re: number){
        const stamp = moment()
        const existing = await (this.model.countDocuments())
        const publicId = existing + 1
        const newComment = new this.model({
            publicId,
            author,
            text,
            stamp,
            re,
        })
        await newComment.save()
        return newComment
    }
    async searchOne(object) {
        const result = await this.model.findOne(object)
        return result
    }
    async search(object?){
        const result = await this.model.find(object)
        return result
    }
    patchOne(){}
    patchMany(){}
    wasteOne(){}
    wasteMany(){}
}