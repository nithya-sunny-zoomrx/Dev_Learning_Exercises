"use strict";



// Week 1 - Q1
let arr1 = [1, 2, 3, 4];
let arr2 = [false, false, false, false];

let outputarr1 = [];
let outputarr2 = [];

arr2.forEach(addElementToOutput)

function addElementToOutput(element,index) {
    element ? outputarr1.push(arr1[index]) : outputarr2.push(arr1[index]);
}

alert(outputarr1);
alert(outputarr2);


// Week 1 - Q2
let x="W3 Schools";
let splitarr = x.split(" ");
let output = '';

splitarr.forEach(function (element , index ) {
    output  += (index==0) ? element : (element.toLowerCase());
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

    for (let element of array) {

        if (callback.call(thisArg, element)) {
            result.push(element);
        }

    }

    return result;
};

//Find() function
Array.prototype.customFind = function (callback, thisArg) {

    const array = Object(this);

    for (let element of array) {

        if (callback.call(thisArg, element)) {
            return element;
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
function recursiveFunction(arrayOfObj, currentIndex, lengthOfArray, target) {

    if(currentIndex == lengthOfArray) 
        return -1;


    if((arrayOfObj[currentIndex][0] === target) || (arrayOfObj[currentIndex][1] === target)) 
        return arrayOfObj[currentIndex];


    return recursiveFunction(arrayOfObj, currentIndex+1, lengthOfArray, target)

}

function findByKeysOrValue(target,obj) {
    let entries = Object.entries(obj);
    let n = entries.length;
    return recursiveFunction(entries,0,n,target);
}

console.log(findByKeysOrValue("b",{ a: 1, b: '2', c: 3 }));
console.log(findByKeysOrValue(3,{ a: 1, b: '2', c: 3 }));


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
                    arr[j] = undefined;
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


/*

JS Logical Programming Questions

*/

// 1. Merge Limits

let input = [[1, 3], [2, 6], [8, 10], [15, 18], [2, 4], [7, 10]];
let result = [];

for (let i = 0; i < input.length; i++) {

    if(result.length==0) {
        result.push(input[i]);
        continue;
    }

    let elemntAddedToResult = false;

    for(let j=0;j<result.length;j++) {
        
        if((input[i][0] >= result[j][0]) && (input[i][1] <= result[j][1])) {
            elemntAddedToResult = true;
            break;
        }
        else if((input[i][0] >= result[j][0]) && (input[i][0] <= result[j][1])) {
            result[j][1] = input[i][1];
            elemntAddedToResult = true;
            break;
        }
        else if((input[i][1] >= result[j][0]) && (input[i][1] <= result[j][1])) {
            result[j][0] = input[i][0];
            elemntAddedToResult = true;
            break;
        }
    }

    if(!elemntAddedToResult)
        result.push(input[i]);

}

for (let limits of result) {
    console.log(limits);
}

// 2. k-th Max in unsorted array
const input1 = [3, 2, 1, 5, 6, 4];
const k = 2;

let arr = Array.apply(null, Array(k)).map(function () { return -Infinity });

for (let element of input1) {

    for (let i = 0; i < arr.length; i++) {

        if (element > arr[i]) {

            if (!(arr[i] == undefined)) {

                let temp = arr[i];

                for (let j = i + 1; j < arr.length; j++) {

                    let newTemp = arr[j];
                    arr[j] = temp;
                    temp = newTemp;

                }

            }

            arr[i] = element;
            break;

        }

    }

}

console.log(arr[k - 1]);


// 3.Longest Substring without repeating characters
const inputString = "abcabcbb";
let longestSubString = "";
let longestStringLength = 0;

for (let i = 0; i < inputString.length; i++) {

    for (let j = i+longestStringLength; j < inputString.length; j++) {

        if (isGivenStringUnique(inputString.substring(i, j + 1))) {

            if (inputString.substring(i, j + 1).length > longestSubString.length) {

                longestSubString = inputString.substring(i, j + 1);
                longestStringLength = longestSubString.length;

            }

        }

    }

}

console.log(longestSubString);

function isGivenStringUnique(givenString) {

    let n = givenString.length;

    for (let i = 0; i < givenString.length; i++) {

        for (let j = i + 1; j < givenString.length; j++) {

            if (givenString[i] === givenString[j])
                return false;

        }

    }

    return true;

}

// 4. Minimum Window Substring
const s = "ADOBECODEBANC";
const t = "ABC";
let minimumWindowSubString = null;

for (let i = 0; i < s.length; i++) {

    for (let j = 0; j < s.length; j++) {

        if (s.substring(i, j + 1).length >= t.length) {

            
            if (isContainsAllCharactersInT(s.substring(i, j + 1), t)) {

                if ((minimumWindowSubString === null) || (s.substring(i, j + 1).length < minimumWindowSubString.length)) {

                    minimumWindowSubString = s.substring(i, j + 1);

                }

            }

        }

    }

}

function isContainsAllCharactersInT(s,t) {

    for (let charInT of t) {

        let charFound = false;

        for (let charInS of s) {

            if(charInS === charInT)
                charFound = true;

        }

        if(!charFound)
            return false;

    }

    return true;

}

console.log(minimumWindowSubString);


// 6. Rotting Oranges
let grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
let duplicate = structuredClone(grid);
let n = grid[0].length;
let minimumTimeForAllOrangesToRot = 0;
let changedThisMinute = 0;
let foundFreshFruit;


do {

    changedThisMinute = 0;
    foundFreshFruit = false;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            if (grid[i][j] === 0 || grid[i][j] === 2) {
                continue;
            }
            
            foundFreshFruit = true;

            if (checkIfInvalidIndex(i, j + 1) || checkIfInvalidIndex(i, j - 1)) {
                
                if (grid[i][j + 1] === 2 || grid[i][j - 1] === 2) {
                    duplicate[i][j] = 2;
                    changedThisMinute++;
                    continue;
                }

            }

            if (checkIfInvalidIndex(i + 1, j) || checkIfInvalidIndex(i - 1, j)) {

                if (grid[i][j - 1] == 2 || grid[i - 1][j] == 2) {
                    duplicate[i][j] = 2;
                    changedThisMinute++;
                    continue;
                }

            }

        }

    }

    if(changedThisMinute > 0) {
        minimumTimeForAllOrangesToRot++
    }

    grid = structuredClone(duplicate);
}
while(changedThisMinute > 0);

// Adding the or condition to return '-1' if there are no fresh friut is found and all are either empty/rotten
console.log((foundFreshFruit && (changedThisMinute == 0) || !foundFreshFruit) ? -1 : minimumTimeForAllOrangesToRot)

function checkIfInvalidIndex(i, j) {
    if((i >= 0 && i < n) && (j >= 0 && j < n))
        return true;
    return false;
}


// 5.Height Balanced Tree
// Define the TreeNode class
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let isHeightBalanced = true;

function arrayToTree(arr) {
    
    let root = new TreeNode(arr[0]);
    let queue = [root];

    let i = 1;

    while (i < arr.length) {
        let currentNode = queue.shift();

        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }

        i++;

        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        
        i++;
    }

    return root;
}

function preorderTraversal(node)
{
   
    if (node === null)
        return;

    let one = heightOfNode(node.right);
    let two = heightOfNode(node.left);

    if(Math.abs( one - two ) > 1)
        isHeightBalanced = false;

    if(!isHeightBalanced)
        return

    //Recur on the left subtree
    preorderTraversal(node.left);

    //Recur on the right subtree
    preorderTraversal(node.right);
}

function heightOfNode(node) {

    if(node == null){
        console.log("1" +node)
        return 0;
    }

    if((node.left == null) && (node.right == null)){
        console.log("2 " + node.val)
        return 0;
    }

    return Math.max(heightOfNode(node.left),heightOfNode(node.right)) + 1;
}

const arrar = [1, 2, null, 3, null, 4];
const tree = arrayToTree(arrar);

console.log(tree);
preorderTraversal(tree);
console.log(isHeightBalanced);

