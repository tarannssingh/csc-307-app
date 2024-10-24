import mongoose from "mongoose";
import userModel from "./user.js"

mongoose.set("debug", true)

// "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.2"
mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch((error) => console.log(error))

const getUsers = (name, job)  => {
    let promise; 
    if (name !== undefined && job !== undefined) {
        promise = userModel.find({name, job})        
    } else if (name !== undefined && job == undefined) {
        promise = findUserByName(name)
    } else if (name === undefined && job !== undefined) {
        promise = findUserByJob(job)
    } else {
        promise = userModel.find() 
    }
    return promise;
}

const findUserById = (id) => {
    return userModel.findById(id)
}

const findUserByName = (name) => {
    return userModel.find({name})
}

const findUserByJob = (job) => {
    return userModel.find({job})
}

const addUser = (user) => {
    const newUser = new userModel(user)
    const promise = newUser.save();
    console.log(user)
    return promise
}

const deleteUserById = (id) => {
    return userModel.findByIdAndDelete(id)
    // null if no doucment was found
}


export default {addUser, getUsers, findUserById, findUserByJob, findUserByName, deleteUserById};