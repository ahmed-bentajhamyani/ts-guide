"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
function capitalize(word) {
    var capWord;
    capWord = word[0].toUpperCase() + word.slice(1);
    return capWord;
}
exports.capitalize = capitalize;
;
