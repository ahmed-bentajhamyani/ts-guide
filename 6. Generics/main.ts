// Generics
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<number>(1))
console.log(identity<boolean>(false))
console.log(identity<string>("Ahmed"))

// Generic Interfaces
interface GenericIdentityFn<T> {
    (arg: T): T;
}

// function identity<T>(arg: T): T {
//     return arg;
// }

// Example usage:
let myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(10));
// console.log(myIdentity("hello")); // Argument of type 'string' is not assignable to parameter of type 'number'.

interface GenericArray<T> {
    arg: T[];
}