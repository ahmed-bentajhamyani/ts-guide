// Decorators
// Class Decorators
function logged(constructor: Function) {
    console.log('User logged in')
}

@logged
class User {
    username: string;
    constructor(username: string) {
        this.username = username;
    }
}

const user = new User('Ahmed');
const user2 = new User('Ahmed');

// Method Decorators
function format() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            return result.toUpperCase();
        };
    };
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @format()
    greet() {
        return "Hello, " + this.greeting;
    }
}

const greeter = new Greeter('World');
console.log(greeter.greet()); // Output: HELLO, WORLD

const greeter2 = new Greeter('Ahmed');
console.log(greeter2.greet()); // Output: HELLO, WORLD
