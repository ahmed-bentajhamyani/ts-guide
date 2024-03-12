// Functions
function greeting(name) {
    return "Welcome aboard " + name;
}
// Optional and Default Parameters
function createEmail(to, subject) {
    if (subject === void 0) { subject = "No subject"; }
    return "To : " + to + "\nSubject : " + subject;
}
function add(x, y, z) {
    return z ? x + y + z : x + y;
}
// Rest Parameters
function concatenateStrings() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.reduce(function (accumulator, current) { return accumulator + current; }, "");
}
function maxNumber() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var maxNum = -1000000;
    numbers.map(function (num) {
        if (num > maxNum)
            maxNum = num;
    });
    return maxNum;
}
