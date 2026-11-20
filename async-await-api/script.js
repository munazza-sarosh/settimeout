
//Empty array
// let listOftodo = JSON.parse(localStorage.getItem('tasklist')) || []
// let storage = JSON.parse(localStorage.getItem("tasklist")) || []
// if (storage.length === 0) {
//     for (let i = 1; i <= 10; i++) {
//          fetch(`https://jsonplaceholder.typicode.com/users/3/todos/${i}`).then(data => data.json()).then(data => storage.push(data))
//         localStorage.setItem("tasklist",JSON.stringify(storage))

//     }
// }
// else {
//     rendertodo();
// }
// function rendertodo(){
//     console.log("hello")
// }


let storage = JSON.parse(localStorage.getItem("tasklist")) || []

if (storage.length === 0) {

    fetch("https://jsonplaceholder.typicode.com/users/3/todos")
        .then(response => response.json())
        .then(data => {
            storage = data

            localStorage.setItem("tasklist", JSON.stringify(storage))

            rendertodo()
        })
        .catch(error => console.log(error))

} else {
    rendertodo();
}

function rendertodo() {
    storage = JSON.parse(localStorage.getItem("tasklist"))

    let ul = document.createElement("ul")
    storage.forEach(list => {
        let li = document.createElement("li")
        let div = document.createElement("div")

        let span1 = document.createElement("span")
        span1.innerHTML = list.userId

        let span = document.createElement("span")
        span.innerHTML = list.id
        span.style.backgroundColor = "pink"

        let span2 = document.createElement("span")
        span2.innerHTML = list.title;

        div.appendChild(span1)
        div.appendChild(span)
        div.appendChild(span2)
        li.appendChild(div)
        ul.appendChild(li)

    })
    document.body.appendChild(ul)
}
