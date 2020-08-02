import { cleanText } from '../validators/clean.text'

const validEmail = email => email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)

export const emailBox = {
    required: [true, 'Email Required...'],
    type: String,
    validate:
    [
        {
            validator: validEmail,
            message: "Invalid Email..."
        },
        {
            validator: cleanText,
            message: "Unclean Email..."
        }
    ]
}