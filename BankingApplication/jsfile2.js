let currentUser = JSON.parse(localStorage.getItem("UserInfo"));
let arrayData = currentUser.accountDetails;

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    displayUserName();
    displayUserMail();
    displayUserNumber();
    createTable();
}

function createTable() {
    // Get the table body element
    const tableBody = document.querySelector('#accountTable tbody');

    // Insert the rows into the table body
    tableBody.innerHTML = createTableRows(currentUser.accountDetails);
}

// Function to create table rows
function createTableRows(accountDetails) {
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
function handleWithdraw(index) {
    const amount = parseFloat(prompt('Enter amount to withdraw:'));

    if (checkInvalidAmount(amount)) {
        alert('Invalid amount.');
        return;
    }

    currentUser.accountDetails[index].balance -= amount;
    updateBalance(index);
}

// Function to handle Deposit
function handleDeposit(index) {
    const amount = parseFloat(prompt('Enter amount to deposit:'));

    if (checkInvalidAmount(amount)) {
        alert('Invalid amount.');
        return;
    }

    currentUser.accountDetails[index].balance += amount;
    updateBalance(index);
}

// Function to update the balance in the table
function updateBalance(index) {
    document.getElementById(`balance-${index}`).innerText = currentUser.accountDetails[index].balance;
    localStorage.setItem("UserInfo", JSON.stringify(currentUser));
}

// Function to display user name on top of the page
function displayUserName() {
    let myString1 = `Name  : ${currentUser.name}`;
    let outputElement1 = document.getElementById("userName");
    outputElement1.innerHTML = myString1;
}

// Function to display user mail id on top of the page
function displayUserMail() {
    let myString1 = `E-Mail  : ${currentUser.eMail}`;
    let outputElement1 = document.getElementById("mail");
    outputElement1.innerHTML = myString1;
}

// Function to display user phone number on top of the page
function displayUserNumber() {
    let myString1 = `Phone No:   ${currentUser.phone}`;
    let outputElement1 = document.getElementById("phone");
    outputElement1.innerHTML = myString1;
}

function checkInvalidAmount(amount) {

    if (isNaN(amount) || amount <= 0) {
        return true;
    }

    return false;
}