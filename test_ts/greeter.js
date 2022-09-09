class Student {
    fullName: string;
    constructor(public firstName: string,public middleInitial: string,public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}F

function greeter(person) {
    return "Hello, " + person;
}
var user = 123;
var result = greeter(user);
console.log(result);
