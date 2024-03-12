var Calculator;
(function (Calculator) {
    var BasicCalculator = /** @class */ (function () {
        function BasicCalculator() {
        }
        BasicCalculator.prototype.add = function (a, b) {
            return a + b;
        };
        return BasicCalculator;
    }());
    Calculator.BasicCalculator = BasicCalculator;
})(Calculator || (Calculator = {}));
