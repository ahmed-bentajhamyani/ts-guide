// Advanced Types
// Union Types
function padLeft(value, padding) {
    console.log(padding);
}
padLeft("Hey", 16);
padLeft("Hey", '16px');
function customerEmail(customer) {
    console.log(customer.email);
}
var customer = {
    name: "a",
    credit: 300,
    email: "a@gmail.com",
    phone: '0600000000'
};
customerEmail(customer);
