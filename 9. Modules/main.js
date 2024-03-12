"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
// Exporting and Importing Modules
var stringUtils_1 = require("./stringUtils");
console.log((0, stringUtils_1.capitalize)('ahmed'));
// Default Exports
var greeter_1 = require("./greeter");
var greeter_2 = require("./greeter");
console.log((0, greeter_1.default)('Ahmed'));
console.log((0, greeter_2.specialGreet)('Ahmed'));
