const username = document.querySelector("#username"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    formSubmit = document.querySelector("form"),
    doc = document.querySelector(".doc")

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault()

    let user = {
        email: email.value,
        name: username.value,
        code: password.value
    }
    e.target.reset()
    localStorage.setItem("user", JSON.stringify(user))
    formSubmit.classList.add("hide")
    doc.classList.remove("hide")
})

let user = localStorage.getItem('user')
let parse = JSON.parse(user)

const resName = document.querySelector(".name"),
    resEmail = document.querySelector(".email"),
    resPas = document.querySelector(".password")

resName.textContent = `Your name is ${parse.name}`  
resEmail.textContent = `Your email is ${parse.email}`
resPas.textContent = `Your password is ${parse.code}`  