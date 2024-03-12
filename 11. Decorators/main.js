var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators
// Class Decorators
function logged(constructor) {
    console.log('User logged in');
}
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    User = __decorate([
        logged
    ], User);
    return User;
}());
// const user = new User('Ahmed');
// Method Decorators
function format() {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(this, args);
            return result.toUpperCase();
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    __decorate([
        format()
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var greeter = new Greeter('World');
console.log(greeter.greet()); // Output: HELLO, WORLD
//# sourceMappingURL=main.js.map