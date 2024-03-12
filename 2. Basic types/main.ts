// Basic Types
// Number, String, and Boolean
let temperature: number = 18;
let welcomeMessage: string = "Welcome aboard!";
let isLoggedIn: boolean = false;

// Arrays and Tuples
let colors: string[] = ["black", "white", "green", "gray"];
let userInfo: [string, number] = ["Ahmed", 24];

// Enum, Any, Void, Null, and Undefined
enum Season { Spring, Summer, Autumn, Winter };
function logValue(value: any): void {
    console.log(value);
}
function noReturn(): void {
    console.log("No return");
}