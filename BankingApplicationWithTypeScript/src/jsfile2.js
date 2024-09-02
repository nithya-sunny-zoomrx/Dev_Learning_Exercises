"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userInfoFromLocalStorage = localStorage.getItem("UserInfo");
var currentUser = JSON.parse(userInfoFromLocalStorage);
var arrayData = currentUser.accountDetails;
document.addEventListener("DOMContentLoaded", initialize);
function initialize() {
    displayUserName();
    displayUserMail();
    displayUserNumber();
    createTable();
}
function createTable() {
    // Get the table body element
    var tableBody = document.querySelector('#accountTable tbody');
    // Insert the rows into the table body
    tableBody.innerHTML = createTableRows(currentUser.accountDetails);
}
// Function to create table rows
function createTableRows(accountDetails) {
    return accountDetails.map(function (detail, index) {
        return "<tr>\n                            <td>".concat(detail.accountNumber, "</td>\n                            <td>").concat(detail.accountType, "</td>\n                            <td id=\"balance-").concat(index, "\">").concat(detail.balance, "</td>\n                            <td>\n                                <button class=\"withdraw\" onclick=\"handleWithdraw(").concat(index, ")\">Withdraw</button>\n                                <button class=\"deposit\" onclick=\"handleDeposit(").concat(index, ")\">Deposit</button>\n                            </td>\n                        </tr>");
    }).join('');
}
// Function to handle Withdraw
function handleWithdraw(index) {
    var userInput = prompt('Enter amount to deposit:');
    var validUserInput;
    if (userInput)
        validUserInput = userInput;
    else {
        alert("Enter a valid integer value");
        return;
    }
    var amount = parseFloat(validUserInput);
    if (checkInvalidAmount(amount)) {
        alert('Invalid amount.');
        return;
    }
    else if (currentUser.accountDetails[index].balance < amount) {
        alert("Low balance. Enter amonut lesser or same as balance");
        return;
    }
    currentUser.accountDetails[index].balance -= amount;
    updateBalance(index);
}
// Function to handle Deposit
function handleDeposit(index) {
    var userInput = prompt('Enter amount to deposit:');
    var validUserInput;
    if (userInput)
        validUserInput = userInput;
    else {
        alert("Enter a valid integer value");
        return;
    }
    var amount = parseFloat(validUserInput);
    if (checkInvalidAmount(amount)) {
        alert('Invalid amount.');
        return;
    }
    currentUser.accountDetails[index].balance += amount;
    updateBalance(index);
}
// Function to update the balance in the table
function updateBalance(index) {
    document.getElementById("balance-".concat(index)).innerText = (currentUser.accountDetails[index].balance).toString();
    localStorage.setItem("UserInfo", JSON.stringify(currentUser));
}
// Function to display user name on top of the page
function displayUserName() {
    var myString1 = "Name  : ".concat(currentUser.name);
    var $outputElement1 = document.getElementById("userName");
    $outputElement1.innerHTML = myString1;
}
// Function to display user mail id on top of the page
function displayUserMail() {
    var myString1 = "E-Mail  : ".concat(currentUser.eMail);
    var $outputElement1 = document.getElementById("mail");
    $outputElement1.innerHTML = myString1;
}
// Function to display user phone number on top of the page
function displayUserNumber() {
    var myString1 = "Phone No:   ".concat(currentUser.phone);
    var $outputElement1 = document.getElementById("phone");
    $outputElement1.innerHTML = myString1;
}
function checkInvalidAmount(amount) {
    if (isNaN(amount) || amount <= 0) {
        return true;
    }
    return false;
}
