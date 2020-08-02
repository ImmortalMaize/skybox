import * as mongoBox from 'mongoose'
import { textBox } from 'src/ugc/shared/schemas/text.sch'
import { nameBox } from 'src/ugc/shared/schemas/name.sch'

export const beepBox = new mongoBox.Schema({
    publicId: { 
        type: Number,
        required: true,
    },
    title: nameBox,
    author: {
        type: mongoBox.Schema.Types.ObjectID,
        required: true,
        ref: 'User'
    },
    blurb: textBox,
    tags: [{ type: String }],
    comments: [{
        type: mongoBox.Schema.Types.ObjectID,
        ref: 'Comment'
    }]
})

export interface Beep {
    publicId: number;
    title: string;
    author: number;
    blurb: string;
    tags: string[];
}