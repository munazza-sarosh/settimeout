// function placeorder (msg, backcall) {
//   setTimeout(() => {
//     alert('do you confirm')
//     backcall(msg)
//   }, 5000)

//   let span = document.createElement('span')
//   span.innerHTML = 'hello'
//   document.body.appendChild(span)
// }
// // calling
// placeorder('your order is placed', confirmorder)

// function confirmorder (response) {
//   let h3 = document.createElement('h3')
//   h3.innerHTML = response
//   document.body.appendChild(h3)
// }

// greet

function greetagain(msg, welcome) {
    setTimeout(() => {
        welcome(msg);
    }, 3000)

    let paragraph = document.createElement("p")
    paragraph.innerHTML = "hii"
    document.body.appendChild(paragraph)
}

greetagain('have a nice day!', greet)
function greet(hello) {
    let h2 = document.createElement("h2")
    h2.innerHTML = hello
    document.body.appendChild(h2)
}
// list

function list(msg, result) {
    setTimeout(() => {
        result(msg);
    }, 5000)

}
list("munazza", listss)
list("sarosh", listss)

let ul = document.createElement("ul")
function listss(lists) {
    let li = document.createElement("li")
    li.innerHTML = lists;
    ul.appendChild(li)
}
document.body.appendChild(ul)

//addition

function addition(msg, sum) {
    setTimeout(() => {
        sum(msg);
    }, 8000)
}
addition("the sum is ", calculation)
function calculation(calculate) {
    let a = 2;
    let b = 6;
    let result = a + b;
    let p = document.createElement("p")
    p.innerHTML = calculate + result;
    document.body.appendChild(p)
}

//info of student 

function information(msg, answer) {
    setTimeout(() => {
        answer(msg);
    }, 1000)
}
information("DATA OF STUDENT: ", studentinfo)
function studentinfo(info) {
    let name = "munazza"
    let age = 20
    let p = document.createElement("p")
    p.innerHTML = info + " Name of student is " + name + " and her age is " + age;
    document.body.appendChild(p)
}