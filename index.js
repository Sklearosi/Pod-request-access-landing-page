let emailInput = document.getElementById("email-input")
let button = document.getElementById("request")
let wrong = document.getElementById("wrong")


button.addEventListener("click", startAction)

function startAction(){

    

    if(emailInput.value.includes("@")) {
        wrong.innerText = ""
    } else {
        wrong.innerText = "Oops! Please check your email"
    }

    if(emailInput.value === "") {
        wrong.innerText = "Oops! Please add your email"
    }

}