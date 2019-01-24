const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

userCreateSubmitButton.addEventListener('click', function () {
    event.preventDefault()

    let userInput = document.getElementsByTagName('input')

    //Combined input into one object by pushing each value into an array//
    let user = {};
    for (let currentInput of userInput) {
        user[currentInput.name] = currentInput.value
    }

fetch("api/user", {
    method: "post",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
    //After the promise is returned, provide status info//
    .then((response) => {
        if (response.status == 201) {
            alert("Account was successfully created")
            console.log("SUCCESS!");
        } else if (response.status == 409) {
            alert("That username is already taken. Please try a new username.")
            console.log("That username is already taken");
        }
    })
});



