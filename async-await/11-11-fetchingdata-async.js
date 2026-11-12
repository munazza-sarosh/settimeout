async function fetch_(other) {
    let response = await fetch('./my.json')
    let data = await response.json()
    console.log(data);
    setTimeout(() => {
        other(data)
    }, 2000)
}

function divrepresent(data) {
    data.forEach(student => {
        let div = document.createElement("div")
        div.innerHTML = `<p>${student.name}</p>`
        document.getElementById('display').appendChild(div)
    })
}
let ul = document.createElement("ul")

function listrepresent(data) {
    let h3 = document.createElement("h3")
    h3.innerHTML = "subjects"
    let ul = document.createElement("ul")

    data.forEach(student => {
        let li = document.createElement("li")
        li.innerHTML = "father name"
        li.innerHTML = `${student.subject}`
        ul.appendChild(li)
        document.body.appendChild(h3)
        document.body.appendChild(ul)

    })
}

function tablerepresent(data) {
    let table = document.createElement("table")
    let tr = document.createElement("tr")

    tr.innerHTML = `
        <th>Name</th>
        <th>Father Name</th>
        <th>Class</th>
        <th>subject</th>
        <th>age</th>`

    table.appendChild(tr)

    data.forEach(student => {
        let row = document.createElement("tr")
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.fathername}</td>
            <td>${student.class}</td>
            <td>${student.subject}</td>
            <td>${student.age}</td>
            `;
        table.appendChild(row);

    })
    document.getElementById("display").appendChild(table);

}

fetch_(listrepresent);
fetch_(divrepresent);
fetch_(tablerepresent);