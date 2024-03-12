// Interfaces
interface Vehicule {
    make: string;
    model: string;
    year?: number;
}
function createVehicle(vehicule: Vehicule): Vehicule {
    return vehicule;
}

const vehicule: Vehicule = {
    make: "Toyota",
    model: "Camry",
    year: 2020
}
console.log(createVehicle(vehicule));

// Optional Properties
interface Person {
    name: string;
    age: number;
    email?: string;
}
function updatePerson(oldPerson: Person, newPerson: Person): Person {
    // if (newPerson.name) oldPerson.name = newPerson.name;
    // if (newPerson.age) oldPerson.age = newPerson.age;
    // if (newPerson.email) oldPerson.email = newPerson.email;
    // return oldPerson;
    return { ...oldPerson, ...newPerson };
}

const person1: Person = {
    name: "Old Person",
    age: 60,
    email: "oldperson@example.com"
};

// Create a "new" person with only required properties
const person2: Person = {
    name: "New Person",
    age: 25
};
console.log(updatePerson(person1, person2));

// Readonly Properties
interface Circle {
    readonly centerX: number;
    readonly centerY: number;
    readonly radius: number;
}

const circle1: Circle = { centerX: 4, centerY: 3, radius: 2 }
const circle2: Circle = { centerX: 2, centerY: 5, radius: 1 }

function moveCircle(oldCircle: Circle, newCircle: Circle): Circle {
    // oldCircle.centerX = newCircle.centerX;
    // oldCircle.centerY = newCircle.centerY;
    // oldCircle.radius = newCircle.radius;
    return oldCircle;
}