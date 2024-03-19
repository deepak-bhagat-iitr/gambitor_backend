const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));


app.post("/", async (req, res) => {
    const { Email, Password } = req.body


    const check = await collection.findOne({
        Email: Email,
        Password: Password
    })

    if (check) {
        res.send("exist")
    }
    else {
        res.send("notexist")
    }


})



app.post("/register", async (req, res) => {
    const { Name, Email, Mobile, Password } = req.body

    const data = {
        Name: Name,
        Email: Email,
        Mobile: Mobile,
        Password: Password
    }

    const check = await collection.findOne({
        Email: Email
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


