// backend.js
import express from "express"

const app = express();
const port = 8000;

app.use(express.json()); // apna middleware for express

// Here we are calling a get method and calling the callback function when we get a call for this url pattern
app.get("/", (req, res) => {
    res.send("Hanji, Hello World");
})

app.listen(port, () => {
    console.log(`@ http://localhost:${port}`)
})

