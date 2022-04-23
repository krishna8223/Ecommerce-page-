import mongoose from "mongoose";
const {Schema,model,models} = mongoose 

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
},{timestamps:true})

module.exports = models.User || model('User',userSchema) 