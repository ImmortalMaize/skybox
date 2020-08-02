"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.beepBox = void 0;
const mongoBox = __importStar(require("mongoose"));
const text_sch_1 = require("../../shared/schemas/text.sch");
const name_sch_1 = require("../../shared/schemas/name.sch");
exports.beepBox = new mongoBox.Schema({
    publicId: {
        type: Number,
        required: true,
    },
    title: name_sch_1.nameBox,
    author: {
        type: mongoBox.Schema.Types.ObjectID,
        required: true,
        ref: 'User'
    },
    blurb: text_sch_1.textBox,
    tags: [{ type: String }],
    comments: [{
            type: mongoBox.Schema.Types.ObjectID,
            ref: 'Comment'
        }]
});
//# sourceMappingURL=beep.sch.js.map