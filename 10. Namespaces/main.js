// Namespaces
// Namespaces vs. Modules
/// <reference path="calculator.ts" />
var basicCal = new Calculator.BasicCalculator(); // Cannot find name 'Calculator'
console.log(basicCal.add(12, 8));
