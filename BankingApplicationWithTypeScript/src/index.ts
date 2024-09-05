export let currentUser: null | userDetailsType = null;

export interface accountDetailsType {
    accountNumber: number,
    accountType: string,
    balance: number
}

export interface userDetailsType {
    name: string;
    eMail: string,
    phone: number,
    accountDetails: accountDetailsType[]
}

export const userDetails: userDetailsType[] = [
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

function navigate(): void {

    const userNameInput = document.getElementById("userNameId") as HTMLInputElement;
    const userName = userNameInput.value;

    currentUser = userDetails.find(user => user.name === userName);

    if (currentUser == null) {
        alert("Enter Valid User Info")
        reset();
        return;
    }

    console.log(currentUser.name);
    localStorage.setItem("UserInfo", JSON.stringify(currentUser));
    window.location.href = 'userDetails.html';
}

function reset(): void {
    const userNameInput = document.getElementById("userNameId") as HTMLInputElement;
    userNameInput.value = "";

    const userPasswordInput = document.getElementById("password") as HTMLInputElement;
    userPasswordInput.value = "";
}
