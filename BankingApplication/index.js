"use strict";


let currentUser = null;
let userDetails = [
    {
        name: "Nithya",
        eMail: "qqq.sss@gmail.com",
        phone: 8220104219,
        accountDetails: [
            {
                accountNumber: 123456,
                accountType: "Savings",
                balance: 50000
            },
            {
                accountNumber: 678901,
                accountType: "Current",
                balance: 3000
            }
        ]
    },
    {
        name: "Nisha",
        eMail: "aaa.bbb@gmail.com",
        phone: 9080647438,
        accountDetails: [
            {
                accountNumber: 543890,
                accountType: "Savings",
                balance: 50000
            },
            {
                accountNumber: 984845,
                accountType: "Savings",
                balance: 100000
            },
            {
                accountNumber: 176923,
                accountType: "Current",
                balance: 3000
            }
        ]
    },
];


function navigate() {
    let userName = document.getElementById("userNameId").value;

    for (let user of userDetails) {
        if (user.name == userName) {
            currentUser = user;
            break;
        }
    }

    if (currentUser == null) {
        alert("Enter Valid User Info")
        reset();
        return;
    }

    console.log(currentUser.name);
    localStorage.setItem("UserInfo", JSON.stringify(currentUser));
    window.location.href = 'userDetails.html';
}

function reset() {
    document.getElementById("userNameId").value = "";
    document.getElementById("password").value = "";
}