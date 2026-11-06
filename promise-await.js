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
    let condition = false;
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

// subtraction of two numbers

let check_no_ = new Promise((resolve, reject) => {
    let num1 = 40;
    let num2 = 2;
    let result = num1 - num2;
    if (result < 20) {
        resolve("result is too small")
    } else {
        reject("result is greater ")
    }
})
check_no_.then(
    msg => {
        document.getElementById("check_no_").innerHTML = msg
    },
    err => {
        document.getElementById("check_no_").innerHTML = err
    }
)

// booking ticket

function ticket(name, age) {
    return new Promise((accepted, rejected) => {
        if (age >= 18) {
            accepted("you are eligible")
        }
        else {
            rejected("you are not eligible")
        }
    })
}
ticket("munazza", 20).then(
    rider => {
        document.getElementById("rider").innerHTML = rider;
    },
    noteligible => {
        document.getElementById("rider").innerHTML = noteligible;
    }
)
// nested promise chainging
function fname(name) {
    return Promise.resolve(name)
}

function age(value) {
    return Promise.resolve(value + ' is 30 years old')
}

function status(state) {
    return Promise.resolve(state + ' and you are a Web Developer')
}

fname('hiba')
    .then(name => {
        return age(name)
    })
    .then(age => {
        return status(age)
    })
    .then(status => {
        document.getElementById('displayChainingPromise').innerHTML = status
    })
    .catch(error => {
        console.log(error)
    })

//  student

function student(name_) {
    return Promise.resolve(name_)
}

function class_(classes) {
    return Promise.resolve(classes + " is in bscs ")
}

function teachername(teacher) {
    return Promise.resolve(teacher + " her teacher name is hiba ")
}

student("munazza")
    .then(name_ => {
        return class_(name_)
    })
    .then(class_ => {
        return teachername(class_)
    })
    .then(teachername => {
        document.getElementById("student").innerHTML = teachername;
    })
    .catch(error => {
        console.log(error)
    })

// school

function studentname(name) {
    return Promise.resolve(name)
}
function studentage(age) {
    return Promise.resolve(age + " is 20 year old ")
}
function city(city_) {
    return Promise.resolve(city_ + " she lives in karachi")
}
studentname("Munazza")
    .then(name => {
        return studentage(name)
    })
    .then(studentage => {
        return city(studentage)
    })
    .then(city => {
        document.getElementById("info").innerHTML = city;
    })
    .catch(error => {
        console.error();
    }
    )

function food(name) {
    return Promise.resolve(name)
}
function price(prices) {
    return Promise.resolve(prices + " cost is PKR 300 per plate")
}
function restaurant(hotel) {
    return Promise.resolve(hotel + " at farhan biryani")
}
food("biryani")
    .then(name => {
        return price(name)
    })
    .then(price => {
        return restaurant(price)
    })
    .then(restaurant => {
        document.getElementById("food").innerHTML = restaurant
    })
    .catch(error => {
        console.log(error);
    })

function add(a, b) {
    return Promise.resolve(a + b);
}
function multiply(value) {
    return Promise.resolve(value * 2)
}
function divide(value) {
    return Promise.resolve(value / 5)
}
add(5, 10)
    .then(sum => {
        return multiply(sum)
    })
    .then(product => {
        return divide(product)
    })
    .then(result => {
        document.getElementById("result").innerHTML = result
    })
    .catch(error => {
        console.log(error)
    })

function calculateProfit(cost, sell) {
    return new Promise((resolve, reject) => {
        if (typeof cost === 'number' && typeof sell === 'number') {
            const profit = sell - cost
            let value =
                profit > 0 ? 'Profit is: ' + profit : 'Loss is: ' + Math.abs(profit)
            resolve(value)
        } else {
            reject('Error: Both cost and sell should be numbers.')
        }
    })
}
calculateProfit(500, 1000).then(
    profit => {
        document.getElementById('displayProfit').innerHTML = profit
    },
    error => {
        document.getElementById('displayProfit').innerHTML = error
    }
)
// comments
const fetching = fetch('https://jsonplaceholder.typicode.com/comments')
fetching
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(res => {
//     console.log("Response received!");
//     return res.json();
// })
// .then(data => {
//     console.log("Data received:", data);
// })
// .catch(error => {
//     console.log("Error:", error);
// });

// photos
const fetch_ = fetch('https://jsonplaceholder.typicode.com/photos')
fetch_
    .then(response =>
        response.json())

    .then(data => {
        console.log(data)
    })

// users
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        console.log("response recieved")
        return res.json();
    })
    .then(data => {
        console.log("data received", data)
    })
    .catch(error => {
        console.log(error)
    })

// todos
const fetch__ = fetch('https://jsonplaceholder.typicode.com/todos')
fetch__
    .then(todores => {
        return todores.json();
    })
    .then(data => {
        console.log(data)
    })

// recipes
const recipe = fetch('https://dummyjson.com/recipes')
recipe
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);

    })