// Functions
function greeting(name: string): string {
    return "Welcome aboard " + name;
}

// Optional and Default Parameters
function createEmail(to: string, subject: string = "No subject"): string {
    return "To : " + to + "\nSubject : " + subject;
}
function add(x: number, y: number, z?: number): number {
    return z ? x + y + z : x + y;
}

// Rest Parameters
function concatenateStrings(...strings: string[]): string {
    return strings.reduce((accumulator, current) => accumulator + current, "");
}
function maxNumber(...numbers: number[]): number {
    let maxNum = -1000000;
    numbers.map(num => {
        if (num > maxNum) maxNum = num;
    })
    return maxNum;
}