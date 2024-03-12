// Advanced Types
// Union Types
function padLeft(value: string, padding: string | number) {
    console.log(padding);
}
padLeft("Hey", 16);
padLeft("Hey", '16px');

// Intersection Types
interface BusinessPartner {
    name: string;
    credit: number;
}
interface Contact {
    email: string;
    phone: string;
}
type Customer = BusinessPartner & Contact;

function customerEmail(customer: Customer) {
    console.log(customer.email);
}
const customer: Customer = {
    name: "a",
    credit: 300,
    email: "a@gmail.com",
    phone: '0600000000'
};
customerEmail(customer);