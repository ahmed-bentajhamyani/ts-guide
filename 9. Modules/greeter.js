"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialGreet = void 0;
function greet(nam) {
    return "Hello, ".concat(nam, "!");
}
exports.default = greet;
function specialGreet(name) {
    return "Hello, dear ".concat(name, "!");
}
exports.specialGreet = specialGreet;
