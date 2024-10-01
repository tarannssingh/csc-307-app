// backend.js
import express from "express";

const app = express();
const port = 8000;

// This is for the incoming requests
app.use(express.json()); // apna middleware for express

// Here we are calling a get method and calling the callback function when we get a call for this url pattern
app.get("/", (req, res) => {
  res.send("Hanji, Hello World");
});

app.listen(port, () => {
  console.log(`@ http://localhost:${port}`);
});


const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor",
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer",
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor",
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspring actress",
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender",
    },
  ],
};

// It uses res.json in the background to send the data 
app.get("/users", (req, res) => {
    res.send(users)
})