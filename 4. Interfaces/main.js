var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createVehicle(vehicule) {
    return vehicule;
}
var vehicule = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(createVehicle(vehicule));
function updatePerson(oldPerson, newPerson) {
    // if (newPerson.name) oldPerson.name = newPerson.name;
    // if (newPerson.age) oldPerson.age = newPerson.age;
    // if (newPerson.email) oldPerson.email = newPerson.email;
    // return oldPerson;
    return __assign(__assign({}, oldPerson), newPerson);
}
var person1 = {
    name: "Old Person",
    age: 60,
    email: "oldperson@example.com"
};
// Create a "new" person with only required properties
var person2 = {
    name: "New Person",
    age: 25
};
console.log(updatePerson(person1, person2));
var circle1 = { centerX: 4, centerY: 3, radius: 2 };
var circle2 = { centerX: 2, centerY: 5, radius: 1 };
function moveCircle(oldCircle, newCircle) {
    // oldCircle.centerX = newCircle.centerX;
    // oldCircle.centerY = newCircle.centerY;
    // oldCircle.radius = newCircle.radius;
    return oldCircle;
}
