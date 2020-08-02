import * as mongoBox from 'mongoose'
import { textBox } from 'src/ugc/shared/schemas/text.sch'

export const commentBox = new mongoBox.Schema({
    publicId: Number,
    author: { 
        type: mongoBox.Schema.Types.ObjectID, 
        ref: 'User',
        required: true
    },
    text: textBox,
    re: { 
        type: mongoBox.Schema.Types.ObjectID,
        required: true,
    },
    for: { 
        type: String,
        enum: [
            'Beep',
            'Comment',
        ]
    }
})

export interface Comment {
    author: number,
    text: string,
    stamp: moment.Moment,
    re: number,
    retype: 'Beep' | 'Comment'
}