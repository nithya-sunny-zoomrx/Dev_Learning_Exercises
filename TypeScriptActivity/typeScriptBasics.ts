// 1.Basic Types
let booleanVar: boolean = true;
let numVar: number = 123;
let stringVar: string = "Hello World!";
let stringArrayVar: string[] = ["One", "Two", "Three", "Four", "Five"];
let tuple: [string, number, boolean] = ["Name", 1, true];

// 2.Functions
function addTwoNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addTwoNumbers(10, 2));

// 3.Interfaces
interface Person {
    firstName: string,
    lastName: string
}

function generateFullName(obj: Person): string {
    return obj.firstName + " " + obj.lastName;
}

let user: Person = {
    firstName: "John",
    lastName: "Doe"
}
console.log(generateFullName(user));

// 4. Classes
class Student implements Person {

    public constructor(public firstName: string, public lastName: string) { }

    public generateFullNameofUser(): string {
        return this.firstName + " " + this.lastName;
    }

}

let student = new Student("John", "Doe");
console.log(student.generateFullNameofUser());

// 6. Union and Intersection Types
function unionExample(parameter: number | string) {
    if (typeof parameter == "number")
        return parameter;
    return parameter.length;
}

console.log(30);
console.log("Hello World!");

// 5.Generics
function identity<S>(value: S): S {
    return value;
}

console.log(identity<boolean>(true));
console.log(identity<string>("true"));

class GenericNumber<T> {

    private sum!: number;

    constructor(private num1: number, private num2: number) { }

    initialiseSumToZero() {
        this.sum = 0;
    }

    addTwoNumbers() {
        this.initialiseSumToZero();
        this.sum =  this.num1 + this.num2;
        return this.sum;
    }
}

// 7.Decorators
@Logger
class shape {
}

function Logger<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            console.log("New Instance of class shape is created and data logged from decorator");
        }
    };
}

const shape1 = new shape();
const shape2 = new shape();
const shape3 = new shape();

// 9.Promises
function promiseExample() : Promise<string>  {
    return new Promise(function(resolve,reject) {
        setTimeout(function() { resolve("Hello world"); }, 2000);
    });
}

function onSuccess(data: string) {
    console.log(data);
}

function onError(error: string) {
    console.log(error);
}


promiseExample().then(onSuccess,onError);

// 10.Async Await
async function asynFunc() : Promise<string> {
    return await promiseExample();
}
console.log(asynFunc());


