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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userBox = void 0;
const mongoBox = __importStar(require("mongoose"));
const email_sch_1 = require("../../shared/schemas/email.sch");
const name_sch_1 = require("../../shared/schemas/name.sch");
const text_sch_1 = require("../../shared/schemas/text.sch");
const moment_1 = __importDefault(require("moment"));
exports.userBox = new mongoBox.Schema({
    publicId: Number,
    alias: name_sch_1.nameBox,
    email: email_sch_1.emailBox,
    password: { required: true, type: String },
    bio: text_sch_1.textBox,
    beeps: [{ type: mongoBox.Schema.Types.ObjectId, Ref: 'Beep' }]
}, { timestamps: {
        currentTime: () => moment_1.default(),
        createdAt: 'origin'
    }
});
//# sourceMappingURL=users.sch.js.map