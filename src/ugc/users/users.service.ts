import { Injectable, ForbiddenException } from '@nestjs/common';
import { User } from './schemas/users.sch'
import { ConclusionsService2 } from 'src/corpses/conclusions.service2';
import { Comment } from '../comments/schemas/comment.sch';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import bcrypt from 'bcrypt'
import he from 'he'

@Injectable()
export class UsersService {
    constructor(private conclusions: ConclusionsService2, @InjectModel('User') private model: Model<User>) {}
    public readonly users: User[] = [];

    async save(alias: string, email: string, password: string, bio: string) {
        const existing = await (this.model.countDocuments())
        const publicId = existing + 1
        const hash = await bcrypt.hash(password, 8)
        //const encodedAlias = he.encode(alias)
        try {
            const user = new this.model({
                publicId,
                alias,
                email,
                password: hash,
                bio
            })
            await user.save()
            return user
        } catch(err) {
            if (err) return err
        }
    }
    async searchEmail(email: string): Promise<any> {
        let user = this.users.find(user => user.email === email)
        return user
    }
    async searchOne (object) {
        const result = await this.model.findOne(object)
        return result
    }
    async search(object?) {
        const result = await this.model.find(object)
        return result
    }
    async patchOne(object, options, callback) {
        await this.model.updateOne(object, options, callback)
    }
    async patch(options, callback, object?) {
        await this.model.update(object, options, callback)
    }
    async wasteOne(object) {
        await this.model.deleteOne(object)
    }
    async waste(object) {
        await this.model.deleteMany(object)
    }
}