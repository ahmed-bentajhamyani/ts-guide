// Classes
// Classes and Inheritance
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters + 10}m.`);
    }
}
const dog = new Dog("Zoz");
dog.move();

// Public, Private, and Protected Modifiers
class Personne {
    private nom: string;
    constructor(nom: string) { this.nom = nom; }
}

const personne = new Personne("Ahmed");
// console.log(personne.nom); // Error: Property 'nom' is private and only accessible within class 'Person'.