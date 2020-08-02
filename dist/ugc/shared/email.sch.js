"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailBox = void 0;
const clean_text_1 = require("./validators/clean.text");
const validEmail = email => email.match(/[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-Z0-9]*/);
exports.emailBox = {
    required: [true, 'Email Required...'],
    type: String,
    validate: [
        {
            validator: validEmail,
            message: "Invalid Email..."
        },
        {
            validator: clean_text_1.cleanText,
            message: "Unclean Email..."
        }
    ]
};
//# sourceMappingURL=email.sch.js.map