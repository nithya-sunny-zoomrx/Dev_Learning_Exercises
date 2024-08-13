"use strict";


// Week 1 - Q1
let arr1 = [1, 2, 3, 4];
let arr2 = [false, false, false, false];

let outputarr1 = [];
let outputarr2 = [];

for (let i=0;i<arr2.length;i++) {
    if(arr2[i]) {
        outputarr1.push(arr1[i]);
    }
    else{
        outputarr2.push(arr1[i]);
    }

}

alert(outputarr1);
alert(outputarr2);


// Week 1 - Q2
let x="W3 Schools";
let splitarr = x.split(" ");
let output = '';

splitarr.forEach(function (element , index ) {
    
    if(index==0){
        output += element;
    }
    else {
        output += (element.toLowerCase());
    }
});

alert(output);


// Week 1 - Q3
function getRandomIntBetween(min, max) {
    // Swap if min is greater than max
    if (min > max) [min, max] = [max, min];
    
    // Use Math.floor to ensure the number is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Examples
console.log(getRandomIntBetween(0, 5));  
console.log(getRandomIntBetween(2, 5));   
console.log(getRandomIntBetween(5, -5));  
console.log(getRandomIntBetween(-2, -7)); 


// Week 1 - Q4

// Filter function
Array.prototype.customFilter = function (callback, thisArg) {

    const array = Object(this);

    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback.call(thisArg, array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};

//Find() function
Array.prototype.customFind = function (callback, thisArg) {

    const array = Object(this);

    for (let i = 0; i < array.length; i++) {
        if (callback.call(thisArg, array[i])) {
            return array[i];
        }
    }
    return -1;
};

//Sort() function
Array.prototype.customSort = function (thisArg) {

    const array = Object(this);

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[j]) < (array[i])) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

};

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const longWords = words.customFilter((word) => word.length > 6);
console.log(longWords);

const array = [5, 12, 8, 130, 44];
const found = array.customFind(element => element > 10);
console.log(found); // 12

const array1 = [1, 30, 4, 21, 100000];
array1.customSort();
console.log(array1);



// Week 2 - Q1
let hour = 0;
let minute = 0;
let second = 0;

document.getElementById("Hour").innerHTML = hour;
document.getElementById("Minute").innerHTML = minute;
document.getElementById("Second").innerHTML = second;

function digitalClock() {
    if(second+1 > 59){
        updateMinute();
        second = 0;
        document.getElementById("Second").innerHTML = second;
    }
    else{
        document.getElementById("Second").innerHTML = ++second;
    }
}

function updateMinute() {
    if(minute+1>59){
        updateHour();
        minute = 0;
        document.getElementById("Minute").innerHTML = minute;
    }
    else{
        document.getElementById("Minute").innerHTML = ++minute;
    }
}

function updateHour() {
    if(minute+1>=24){
        hour = 0;
        document.getElementById("Hour").innerHTML = hour;
    }
    else{
        document.getElementById("Hour").innerHTML = ++hour;
    }
}

setInterval(digitalClock, 1000);


// Week 2- Q2
function deleteGivenKey(keyValue,obj) {
    for (const key in obj) {
        if((key == keyValue) || (obj[key]==keyValue)) {
            return ({[key]:obj[key]});
        }
    }
    return "Key not found";
}

console.log(deleteGivenKey("b",{ a: 1, b: '2', c: 3 }));
console.log(deleteGivenKey(3,{ a: 1, b: '2', c: 3 }));


// Week 2 - Q3
function deleteGivenKey(keyValue,obj) {
    for (const key in obj) {
        if(key == keyValue) {
            delete obj[key];
            break;
        }
    }
    return obj;
}

console.log(deleteGivenKey("b",{ a: 1, b: '2', c: 3 }));
console.log(deleteGivenKey("c",{ a: 1, b: '2', c: 3 }));


// Week 2 - Q4

function returnUniqueElementsInArray(arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] === undefined)) {
            let unique = true;
            for (let j = i + 1; j < arr.length; j++) {
                if(arr[i]==arr[j]){
                    unique = false;
                    delete arr[j];
                }
            }
            if(unique){
                result.push(arr[i]);
            }
        }
    }
    return result;
}

console.log(returnUniqueElementsInArray([1, 2, 2, 3, 4, 4, 5]));
console.log(returnUniqueElementsInArray([6,6,8,8,9]));
console.log(returnUniqueElementsInArray([1, 2,3,4]));

