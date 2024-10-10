// backend.js
import express from "express";
import cors from "cors"

const app = express();
const port = 8000;

// allow any domain to request 
app.use(cors())
// This is for the incoming requests
app.use(express.json()); // apna middleware for express

// Here we are calling a get method and calling the callback function when we get a call for this url pattern
app.get("/", (req, res) => {
  res.send("Hanji, Hello World");
});

app.listen(port, () => {
  console.log(`@ http://localhost:${port}`);
});


let users = {
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

const generateID = () => {
  let id = ""
  for (let i = 0; i < 3; i++) {
    id += parseInt(Math.random() * 1000)
    // 97 to 122
    // String.fromCharCode()
  }
  return id
}

const addUser =  (user) => {
  let id = generateID()
  user["id"] = id
  users["users_list"].push(user)
  // return user
}

const deleteUserById = (id) => {
  users["users_list"] = users["users_list"].filter(user => user.id != id)
}

const findUserByNameAndJob = (name, job) => {
  return users["users_list"].filter(user => user.name === name && user.job === job)
}

app.get("/users", (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    if (name && job) {
      let result = findUserByNameAndJob(name, job);
      result = {user_list : result}
      res.send(result)
    }
    else if (name) {
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


app.post("/users", (req, res) => {
    let user = req.body
    addUser(user)
    return res.status(201).send({user}) // this sends user with the new user id appended 
})


app.delete("/users/:id", (req, res) => {
  let id = req.params["id"]
  let intial = users["users_list"].length
  deleteUserById(id)
  let final = users["users_list"].length
  if (intial === final) {
    return res.status(404).send()
  }
  return res.status(204).send()
}) 
