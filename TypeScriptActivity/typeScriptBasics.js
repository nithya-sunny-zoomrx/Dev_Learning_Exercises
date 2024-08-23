"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.Basic Types
var booleanVar = true;
var numVar = 123;
var stringVar = "Hello World!";
var stringArrayVar = ["One", "Two", "Three", "Four", "Five"];
var tuple = ["Name", 1, true];
// 2.Functions
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(10, 2);
function generateFullName(obj) {
    return obj.firstName + " " + obj.lastName;
}
var user = {
    firstName: "John",
    lastName: "Doe"
};
console.log(generateFullName(user));
// 4. Classes
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.generateFullNameofUser = function () {
        return this.firstName + " " + this.lastName;
    };
    return Student;
}());
var student = new Student("John", "Doe");
console.log(student.generateFullNameofUser());
// 6. Union and Intersection Types
function unionExample(parameter) {
    if (typeof parameter == "number")
        return parameter;
    return parameter.length;
}
console.log(30);
console.log("Hello World!");
