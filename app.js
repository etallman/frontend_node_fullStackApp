const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const usersArray = []

// add POST request listener here
app.post('/api/user', (req, res) => {
    let usernameTaken = false;

    for (user of usersArray) {
        if (user.username === req.body.username) {
            usernameTaken = true
            break
        } else {
            usernameTaken = false
        }
    }
    if (usernameTaken) {
        res.status(409).send()
    } else {
        req.body.id = Math.floor((Math.random() * 5,000,000) + 1)
        usersArray.push(req.body)
        res.status(201).send()
        console.log(usersArray)
        alert('Your userID is' + usersArray)
        // throw new Error("Username is Taken")
    }
})

//Listener to identify port for user//
app.listen(3000, () => {
    console.log("Listening on Port 3000")
});