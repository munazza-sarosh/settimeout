const heading = document.createElement("h1")

function firstheading() {
    heading.innerHTML = "heading"
}

function secondheading() {
    heading.innerHTML = "second heading"
}

firstheading();
setTimeout(secondheading, 9000);

const ul = document.createElement("ul")
function list() {
    let li = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")

    li.innerText = "munazza"
    li2.innerText = "sarosh"
    li3.innerText = "bscs"

    ul.appendChild(li)
    ul.appendChild(li2)
    ul.appendChild(li3)

}
setTimeout(list, 5000)

const para = document.createElement("paragraph")
function names() {
    para.innerHTML = "munazza"
}
function surname() {
    para.innerHTML = "saroshHH"
}
surname();
setTimeout(names, 5000)


const ul_ = document.createElement("ul")
function lists() {
    li = document.createElement("li")
    li2 = document.createElement("li")
    li3 = document.createElement("li")

    li.innerHTML = "name"
    li2.innerHTML = "class"
    li3.innerHTML = "age"

    ul.appendChild(li)
    ul.appendChild(li2)
    ul.appendChild(li3)

}


document.body.appendChild(para)
document.body.appendChild(ul)
document.body.appendChild(heading)

