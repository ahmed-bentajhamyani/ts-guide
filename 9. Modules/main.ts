// Modules
// Exporting and Importing Modules
import { capitalize } from "./stringUtils";
console.log(capitalize('ahmed'));

// Default Exports
import greet from "./greeter";
import { specialGreet } from "./greeter";

console.log(greet('Ahmed'));
console.log(specialGreet('Ahmed'));