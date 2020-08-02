"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanText = exports.nWords = void 0;
exports.nWords = ['nigger', 'cracker', 'beaner', 'queer', 'gook', 'chink', 'heeb'];
exports.cleanText = text => !exports.nWords.some(word => text.includes(word));
//# sourceMappingURL=clean.text.js.map