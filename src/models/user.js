import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
    },
    profileImage:String,
    password:String,
    createdAt:Date,
    updatedAt:Date
});

const User=mongoose.model("User",userSchema)
export default User