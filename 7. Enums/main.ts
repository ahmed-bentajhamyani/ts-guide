// Enums
// Numeric Enums
enum Reponse {
    No = 0,
    Yes = 1,
}
function reponseNumeric(reponse: string): number {
    if (reponse) return Reponse.Yes;
    else return Reponse.No;
}
console.log(reponseNumeric(''));

// String Enums
enum Message {
    Success = "SUCCESS",
    Failure = "FAILURE"
}
function reponseString(reponse: string): string {
    if (reponse) return Message.Success;
    else return Message.Failure;
}
console.log(reponseString(''));