"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetails = exports.currentUser = void 0;
exports.currentUser = null;
exports.userDetails = [
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
    var userNameInput = document.getElementById("userNameId");
    var userName = userNameInput.value;
    for (var _i = 0, userDetails_1 = exports.userDetails; _i < userDetails_1.length; _i++) {
        var user = userDetails_1[_i];
        if (user.name == userName) {
            exports.currentUser = user;
            break;
        }
    }
    if (exports.currentUser == null) {
        alert("Enter Valid User Info");
        reset();
        return;
    }
    console.log(exports.currentUser.name);
    localStorage.setItem("UserInfo", JSON.stringify(exports.currentUser));
    window.location.href = 'userDetails.html';
}
function reset() {
    var userNameInput = document.getElementById("userNameId");
    userNameInput.value = "";
    var userPasswordInput = document.getElementById("password");
    userPasswordInput.value = "";
}
