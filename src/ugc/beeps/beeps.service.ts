import { Injectable, BadRequestException } from '@nestjs/common'
import { Beep } from './schemas/beep.sch'
import { ConclusionsService2 } from 'src/corpses/conclusions.service2';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

@Injectable()
export class BeepsService {
    constructor(private conclusions: ConclusionsService2, @InjectModel('Beep') private model: Model<Beep> ) {}
    private readonly beeps: Beep[] = [];
    save(title: string, creator: number, blurb?: string, tags?: string[]) {
        
        if (title && creator) {
            const publicId = this.beeps.length + 1
            const beep = new this.model({
                publicId,
                title,
                creator,
                blurb,
                tags
            })
            beep.save()
            console.log(beep)
        } else {
            this.conclusions.flag(410, "No.")
        }
    }
    async searchOne (object) {
        const result = await this.model.findOne(object)
        return result
    }
    async search(object?) {
        const result = await this.model.find(object)
        return result
    }
    patchOne(object, options, callback) {
        this.model.updateOne(object, options, callback)
    }
    patch(options, callback, object?) {
        this.model.update(object, options, callback)
    }
    wasteOne(object) {
        this.model.deleteOne(object)
    }
    waste(object) {
        this.model.deleteMany(object)
    }
}