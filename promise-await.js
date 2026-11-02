// Creating a new Promise object then take 2 callbacks
let PromiseObject = new Promise((resolve, reject) => {
    //let condition = true;
    let condition = true
    if (condition) {
        resolve('Promise is resolved successfully')
    } else {
        reject('Promise is rejected')
    }
})

PromiseObject.then(
    message => {
        document.getElementById('displayPromise').innerHTML = message
        console.log(message)
    },
    Err => {
        document.getElementById('displayPromise').innerHTML = Err
        console.log(Err)
    }
)
// promise 1

let promisee = new Promise((resolve, reject) => {
    let condition = false;
    if (condition) {
        resolve("resolved successfully")
    } else {
        reject("rejected")
    }
})
promisee.then(
    msg => {
        document.getElementById("promise").innerHTML = msg
    },
    err => {
        document.getElementById("promise").innerHTML = err
    }
)
// check name
let promise_munazza = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        resolve("Welcome Munazza")
    } else {
        reject("something went wrong")
    }
})
promise_munazza.then(
    msg => {
        document.getElementById("munazza").innerHTML = msg
    },
    err => {
        document.getElementById("munazza").innerHTML = err
    }
)

//check whether number is greater then 10 or not 

let number = new Promise((resolve, reject) => {
    let condition = 22;
    if (condition <= 10) {
        resolve("number is less then 10")
    } else {
        reject("number is greater then10")
    }
})
number.then(
    msg => {
        document.getElementById("checkno").innerHTML = msg
    },
    err => {
        document.getElementById("checkno").innerHTML = err
    }
)

// check username

let check_user = new Promise((resolve, reject) => {
    let username = "munaza"
    if (username === "munazza") {
        resolve("login succesfully")
    } else {
        reject("user not found ")
    }
})
check_user.then(
    msg => {
        document.getElementById("username").innerHTML = msg
    },
    err => {
        document.getElementById("username").innerHTML = err
    }
)

// sum of two numbers

let check_no = new Promise((resolve, reject) => {
    let num1 = 2;
    let num2 = 20;
    let result = num1 + num2;
    if (result < 40) {
        resolve("sum is too small")
    } else {
        reject("sum is greater ")
    }
})
check_no.then(
    msg => {
        document.getElementById("check_no").innerHTML = msg
    },
    err => {
        document.getElementById("check_no").innerHTML = err
    }
)

// check whether number is even or odd

let even_odd = new Promise((resolve, reject) => {
    let no = 32;
    if (no % 2 == 0) {
        resolve("number is even")
    }
    else {
        reject("number is odd")
    }
})

even_odd.then(
    msg => {
        document.getElementById("even_odd").innerHTML = msg
    },
    err => {
        document.getElementById("even_odd").innerHTML = err
    }
)