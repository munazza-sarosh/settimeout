async function fetching(anyfunction) {
    let response = await fetch("student.json")
    let data = await response.json()  //mistake red mark on await  //await used with async

    setTimeout(() => {
        anyfunction(data)
    }, 2000)
}

function namedisplay(data) {
    data.forEach(student => { // mistake // used names instead of data
        let para = document.createElement("p")
        para.innerHTML = student.name;

        document.body.appendChild(para)
    });
}

function agedisplay(data) {
    let ul = document.createElement("ul")
    data.forEach(student => {
        let li = document.createElement("li")
        li.innerHTML = student.age;
        ul.appendChild(li)
    })
    document.body.appendChild(ul)
}

function citydisplay(data) {
    let table = document.createElement("table")
    table.setAttribute("border", 2) //mistake 

    data.forEach(student => {
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        td.innerHTML = student.city
        tr.appendChild(td)
        table.appendChild(tr)
    })
    document.body.appendChild(table)
}
function tabledisplay(data) {
    let table = document.createElement("table")
    let tr = document.createElement("tr")
    Object.keys(data[0]).forEach(heading => {
        let th = document.createElement("th")
        th.innerHTML = heading;
        tr.appendChild(th)
    })
    table.appendChild(tr)

    data.forEach(student => {
        let tr = document.createElement("tr")

        Object.values(student).forEach(elements => {
            let td = document.createElement("td")
            td.innerHTML = elements;

            tr.appendChild(td)
        })
        table.appendChild(tr)
    })
    document.body.appendChild(table)
}

fetching(namedisplay);
fetching(agedisplay);
fetching(citydisplay);
fetching(tabledisplay);