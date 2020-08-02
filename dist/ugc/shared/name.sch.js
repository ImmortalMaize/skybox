"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameBox = void 0;
const he_1 = __importDefault(require("he"));
const clean_text_1 = require("./validators/clean.text");
const shortName = name => { return he_1.default.decode(name).length < 50; };
exports.nameBox = {
    required: true,
    type: String,
    validate: [
        {
            validator: shortName,
            message: "Long Name..."
        },
        {
            validator: clean_text_1.cleanText,
            message: "Unclean Name..."
        }
    ]
};
//# sourceMappingURL=name.sch.js.map