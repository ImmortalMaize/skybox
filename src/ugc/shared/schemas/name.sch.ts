import he from 'he'
import { cleanText } from '../validators/clean.text';

const shortName = name => { return he.decode(name).length < 50 };

export const nameBox = {
    required: true,
    type: String,
    validate:
    [
        {
            validator: shortName,
            message: "Long Name..."  
        },
        {
            validator: cleanText,
            message: "Unclean Name..."
        }
    ]
}
