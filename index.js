console.log('hello world')

let user = ''
let pass = ''
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const message = document.getElementById('message')

const authUser = 'riley'
const authPass = 'pass'

function setUsername() {
    user = usernameInput.value 
}

function setPassword() {
    pass = passwordInput.value
}

function login(e) {
    e.preventDefault()
    if (user === authUser && pass === authPass) {
        message.innerHTML = `<h1>welcome, riley!</h1>`
    } else {
        message.innerHTML = `<h1>username or password incorrect</h1>`
    }
    usernameInput.value = ''
    passwordInput.value = ''
}