// 1.Basic Types
let booleanVar : boolean = true;
let numVar : number = 123;
let stringVar : string = "Hello World!";
let stringArrayVar : string[] = ["One","Two","Three","Four","Five"];
let tuple : [string,number,boolean] = ["Name" , 1 , true];

// 2.Functions
function addTwoNumbers(num1 : number , num2 : number) : number {
    return num1+num2;
}
console.log(10,2);

// 3.Interfaces
interface Person {
    firstName: string,
    lastName: string
  }

function generateFullName(obj : Person) : string {
    return obj.firstName + " " + obj.lastName;
}

let user : Person = {
    firstName : "John",
    lastName : "Doe"
}
console.log(generateFullName(user));

// 4. Classes
class Student implements Person {

    public constructor(public firstName : string , public lastName : string) {}

    public generateFullNameofUser() : string {
        return this.firstName + " " + this.lastName;
    }

}

let student = new Student("John","Doe");
console.log(student.generateFullNameofUser());

// 6. Union and Intersection Types
function unionExample(parameter : number | string) {
    if(typeof parameter =="number")
        return parameter;
    return parameter.length;
}

console.log(30);
console.log("Hello World!");

export{}