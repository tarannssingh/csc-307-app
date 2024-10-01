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
const findUserByName = (name) => {
    // The filter is not selecting one, but getting all of the users with that name
    return users["users_list"].filter( (user) => user["name"] === name)
}

const findUserByID = (id) => {
    return users.users_list.find(user => user.id === id)
}

app.get("/users", (req, res) => {
    const name = req.query.name;
    if (name) {
        let result = findUserByName(name)
        result = { users_list : result } // this is keeping a similar structure to if we got all of them
        res.send(result)
    } else {
        res.send(users)
    }

    // my implementation (this is flawed in the sense that it has a lack of consistent strucutre amongst the differnt calls, and )
    // if (req.query.name){
    //     let user = users.users_list.find((user) => {
    //         return user.name === req.query["name"]
    //     })
    //     if (user) {
    //         res.send(user)
    //     }
    //     res.send("User Not Found")
    // }
    // res.send(users)

})

app.get("/users/:id", (req, res) => {
    let id = req.params.id
    let user = findUserByID(id)
    if (user) {
        return res.status(200).send({ users_list :  user }) // user found 
    }
    res.status(404).send({users_list : []}) // user not found
})

