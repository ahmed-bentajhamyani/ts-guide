// Basic Types
// Number, String, and Boolean
var temperature = 18;
var welcomeMessage = "Welcome aboard!";
var isLoggedIn = false;
// Arrays and Tuples
var colors = ["black", "white", "green", "gray"];
var userInfo = ["Ahmed", 24];
// Enum, Any, Void, Null, and Undefined
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
;
function logValue(value) {
    console.log(value);
}
function noReturn() {
    console.log("No return");
}
