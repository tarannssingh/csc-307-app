import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: true,
            trim: true
        },
        job : {
            type: String,
            required: true,
            trim: true,
            validate(value) {
                if (value.length < 2) {
                    throw new Error("Invalid Job, must be at least 2 characters long.")
                }
            },
        },
    },
    { collection : "users_list"}
);

const User = mongoose.model("User", UserSchema)

export default User
// Will fetch regardless, model just allows us to play with data as if they were objects