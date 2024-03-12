// Generics
// Generic Functions
function identity(arg) {
    return arg;
}
console.log(identity(1));
console.log(identity(false));
console.log(identity("Ahmed"));
// function identity<T>(arg: T): T {
//     return arg;
// }
// Example usage:
var myIdentity = identity;
console.log(myIdentity(10));
