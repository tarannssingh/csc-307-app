// backend.js
import express from "express";
import cors from "cors"
import userServices from "./user-services.js";

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

// let users = {
//   users_list: [
//     {
//       id: "xyz789",
//       name: "Charlie",
//       job: "Janitor",
//     },
//     {
//       id: "abc123",
//       name: "Mac",
//       job: "Bouncer",
//     },
//     {
//       id: "ppp222",
//       name: "Mac",
//       job: "Professor",
//     },
//     {
//       id: "yat999",
//       name: "Dee",
//       job: "Aspring actress",
//     },
//     {
//       id: "zap555",
//       name: "Dennis",
//       job: "Bartender",
//     },
//   ],
// };

// // It uses res.json in the background to send the data 
// const findUserByName = (name) => {
//     // The filter is not selecting one, but getting all of the users with that name
//     return users["users_list"].filter( (user) => user["name"] === name)
// }

// const findUserByID = (id) => {
//     return users.users_list.find(user => user.id === id)
// }

// const addUser =  (user) => {
//   let id = generateID()
//   user["id"] = id
//   users["users_list"].push(user)
//   // return user
// }

// const findUserByNameAndJob = (name, job) => {
//   return users["users_list"].filter(user => user.name === name && user.job === job)
// }

// const deleteUserById = (id) => {
//   users["users_list"] = users["users_list"].filter(user => user.id != id)
// }

app.get("/users", (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    let result;
    if (name && job) {
      result = userServices.getUsers(name, job);
    } else if (name) {
      result = userServices.findUserByName(name);
    } else {
        // res.send(users)
        result = userServices.getUsers(name, job);
    }
    result.then((users_list) => {
      return res.send({users_list : users_list})
    }).catch(error => console.log(error))

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
    let user = userServices.findUserById(id).then(user => {
      if (user) {
        return res.status(200).send({ users_list :  user }) // user found 
      }
        return res.status(404).send({users_list : []}) // user not found
      }
    ).catch(error => console.log(error))
})

app.post("/users", (req, res) => {
    let user = req.body
    userServices.addUser(user).then(user => {
      return res.status(201).send({user}) // this sends user with the new user id appended 
    }).catch(error => console.log(error))
})

app.delete("/users/:id", (req, res) => {
  let id = req.params["id"]
  console.log(id);
  userServices.deleteUserById(id).then(user => {
    if (!user) { // if it is null i.e. no doucment was deleted
      return res.status(404).send()
    }
    console.log(user);
    return res.status(204).send()
  })
}) 



