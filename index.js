const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));


app.post("/", async (req, res) => {
    const { email, password } = req.body


    const check = await collection.findOne({
        email: email,
        password: password
    })

    if (check) {
        res.send("exist")
    }
    else {
        res.send("notexist")
    }


})



app.post("/register", async (req, res) => {
    const { email, password } = req.body

    const data = {
        email: email,
        password: password
    }

    const check = await collection.findOne({
        email: email
    })

    if (check) {
        res.json("exist")
    }
    else {

        await collection.insertMany([data])
        res.json("notexist")

    }

})
const port = process.env.PORT || 5000; // Default to 3000 if PORT is not set in .env
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


