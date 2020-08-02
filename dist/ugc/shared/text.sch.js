"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textBox = void 0;
const he_1 = __importDefault(require("he"));
const clean_text_1 = require("./validators/clean.text");
const shortText = text => { return he_1.default.decode(text).length < 630; };
exports.textBox = {
    required: [true, "Text Needed..."],
    type: String,
    validate: [
        {
            validator: shortText,
            message: "Long Text..."
        },
        {
            validator: clean_text_1.cleanText,
            message: "Unclean Text..."
        }
    ]
};
//# sourceMappingURL=text.sch.js.map