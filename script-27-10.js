let namess = "munazza"
let fathername = "syed muhammad sohail"
let age = "20"

// const para = document.getElementById("para1");
// const para2 = document.getElementById("para2");
// const para3 = document.getElementById("para3");


const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");

setTimeout(() => {
    alert("alert!!")
    namess = "sarosh"
    fathername = "xyz"
    age = "19"
    para1.innerHTML = namess
    para2.innerHTML = fathername
    para3.innerHTML = age
}, 8000)

function showname() {
    para1.innerHTML = namess;
}
function showfather() {
    para2.innerHTML = fathername;
}

function showage() {
    para3.innerHTML = age;
}
document.body.appendChild(para1)
document.body.appendChild(para2)
document.body.appendChild(para3)

showname();
showfather();
showage();

function abc (id) {
  id = '12345'
  console.log(id)
}

function edf (callme) {
  setTimeout(() => {
    callme()
  }, 6000)
}

function egf () {}
function hello () {}

edf(egf)