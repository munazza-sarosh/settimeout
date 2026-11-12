function checkingusername() {
    let box = new Promise((resolve, rej) => {
        let username = true
        if (username) {
            setTimeout(() => {
                document.getElementById("box").innerHTML = "checking your username.."
                document.getElementById("box").style.color = "blue"
                document.getElementById("box").style.backgroundColor = "lightblue"
                document.getElementById("box").style.fontSize = "20px"
                resolve()
            }, 3000);
        }
        else {
            rej();
        }

    })
}
function password() {
    let box = new Promise((resolve, reject) => {
        let password = "abcd123"
        if (password) {
            setTimeout(() => {
                document.getElementById("box").innerHTML = "verifying password..."
                document.getElementById("box").style.backgroundColor = "lightgray"
                document.getElementById("box").style.color = "gray"
                document.getElementById("box").style.fontSize = "30px"
                resolve();
            }, 5000)
        }
        else {
            reject();
        }

    })
}

function login() {
    let box = new Promise((resolve, reject) => {
        let login = true
        if (login) {
            setTimeout(() => {
                document.getElementById("box").innerHTML = "login successfully"
                document.getElementById("box").style.color = "black"
                document.getElementById("box").style.backgroundColor = "rgba(138, 151, 133, 0.45)"
                document.getElementById("box").style.borderRadius = "10px"
                document.getElementById("box").style.fontWeight = "bold"
                resolve()
            }, 8000)
        }
        else{
            reject();
        }
    })
}

async function display() {
    await checkingusername();
    await password();
    await login();
}
display();