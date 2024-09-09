import { userDetailsType as userDetailsType } from './index';
import { accountDetailsType as accountDetailsType } from './index';

const userInfoFromLocalStorage : string = localStorage.getItem("UserInfo")!;
let currentUser : userDetailsType = JSON.parse(userInfoFromLocalStorage);
let arrayData : accountDetailsType[] = currentUser.accountDetails;

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    displayUserName();
    displayUserMail();
    displayUserNumber();
    createTable();
}

function createTable() {
    // Get the table body element
    const tableBody = document.querySelector('#accountTable tbody')!;

    // Insert the rows into the table body
    tableBody.innerHTML = createTableRows(currentUser.accountDetails);
}

// Function to create table rows
function createTableRows(accountDetails : accountDetailsType[] ) {
    return accountDetails.map((detail, index) => {
        return `<tr>
                            <td>${detail.accountNumber}</td>
                            <td>${detail.accountType}</td>
                            <td id="balance-${index}">${detail.balance}</td>
                            <td>
                                <button class="withdraw" onclick="handleWithdraw(${index})">Withdraw</button>
                                <button class="deposit" onclick="handleDeposit(${index})">Deposit</button>
                            </td>
                        </tr>`;
    }).join('');
}

// Function to handle Withdraw
function handleWithdraw(index : number) {
    
    let userInput = prompt('Enter amount to deposit:');
    let amount : number = parseFloat(userInput);

    while(!checkInvalidAmount(amount)){
        alert("Enter a valid interger value")
        userInput = prompt('Enter amount to deposit:');
        amount = parseFloat(userInput);
    }

    if(currentUser.accountDetails[index].balance < amount) {
        alert("Low balance! Enter amonut lesser or same as balance");
        return;
    }

    currentUser.accountDetails[index].balance -= amount;
    updateBalance(index);
}

// Function to handle Deposit
function handleDeposit(index : number) : void {

    let userInput = prompt('Enter amount to deposit:');
    let amount : number = parseFloat(userInput);
    
    while(!checkInvalidAmount(amount)){
        alert("Enter a valid interger value")
        userInput = prompt('Enter amount to deposit:');
        amount = parseFloat(userInput);
    }

    currentUser.accountDetails[index].balance += amount;
    updateBalance(index);
}

// Function to update the balance in the table
function updateBalance(index : number) : void {
    document.getElementById(`balance-${index}`)!.innerText = (currentUser.accountDetails[index].balance).toString();
    localStorage.setItem("UserInfo", JSON.stringify(currentUser));
}

// Function to display user name on top of the page
function displayUserName() : void {
    let myString1 = `Name  : ${currentUser.name}`;
    let $outputElement1 = document.getElementById("userName")!;
    $outputElement1.innerHTML = myString1;
}

// Function to display user mail id on top of the page
function displayUserMail() : void {
    let myString1 = `E-Mail  : ${currentUser.eMail}`;
    let $outputElement1 = document.getElementById("mail")!;
    $outputElement1.innerHTML = myString1;
}

// Function to display user phone number on top of the page
function displayUserNumber() : void {
    let myString1 = `Phone No:   ${currentUser.phone}`;
    let $outputElement1 = document.getElementById("phone")!;
    $outputElement1.innerHTML = myString1;
}

function checkInvalidAmount(amount : number) : boolean{

    if ((!isNaN(amount)) && amount > 0) {
        return true;
    }

    return false;
}