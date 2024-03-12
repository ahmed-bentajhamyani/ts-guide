// Enums
// Numeric Enums
var Reponse;
(function (Reponse) {
    Reponse[Reponse["No"] = 0] = "No";
    Reponse[Reponse["Yes"] = 1] = "Yes";
})(Reponse || (Reponse = {}));
function reponseNumeric(reponse) {
    if (reponse)
        return Reponse.Yes;
    else
        return Reponse.No;
}
console.log(reponseNumeric(''));
// String Enums
var Message;
(function (Message) {
    Message["Success"] = "SUCCESS";
    Message["Failure"] = "FAILURE";
})(Message || (Message = {}));
function reponseString(reponse) {
    if (reponse)
        return Message.Success;
    else
        return Message.Failure;
}
console.log(reponseString(''));
