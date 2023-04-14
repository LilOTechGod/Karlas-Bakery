const express = require("express");
const cors = require("cors");
const db = require('./config/config');
const dotenv = require('dotenv');
dotenv.config()
const { PORT } = process.env

const app = express()
// appuse(cors)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Your Server is up and running")
})

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);

    })
})
