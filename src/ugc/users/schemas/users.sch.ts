import * as mongoBox from 'mongoose'
import { emailBox } from 'src/ugc/shared/schemas/email.sch'
import { nameBox } from 'src/ugc/shared/schemas/name.sch'
import { textBox } from 'src/ugc/shared/schemas/text.sch'
import moment from 'moment'

export const userBox = new mongoBox.Schema({
    publicId: Number,
    alias: nameBox,
    email: emailBox,
    password: { required: true, type: String},
    bio: textBox,
    //has
    beeps: [{type: mongoBox.Schema.Types.ObjectId, Ref: 'Beep'}]
}, { timestamps: 
    {
        currentTime: () => moment(),
        createdAt: 'origin'
    }
})

export interface User {
    publicId: number;
    alias: string;
    email: string;
    password: string;
    bio: string;
}