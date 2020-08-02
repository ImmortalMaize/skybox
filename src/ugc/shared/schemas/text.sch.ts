import he from 'he'
import { cleanText } from '../validators/clean.text'

const shortText = text => { return he.decode(text).length < 630 }

export const textBox = {
    required: [true, "Text Needed..."],
    type: String,
    validate: 
    [
        {
            validator: shortText,
            message: "Long Text..."
        },
        {
            validator: cleanText,
            message: "Unclean Text..."
        }
    ]
}