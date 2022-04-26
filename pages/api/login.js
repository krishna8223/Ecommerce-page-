import mongoose from "mongoose";
import DB from "../../helpers/db";
import User from '../../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

DB()



const CheckUser =async (req,res) => {
    const {email,password} = req.body
    const userPassword =await User.findOne({email})
    if(!userPassword){
        return  res.status(400).json({error:"User not found"})
    }
    const user = await bcrypt.compare(password,userPassword.password )
    if(!user){
        return  res.status(401).json({error:"Invalid Credentials"})
    }
    const token =jwt.sign({email:userPassword.email},'krishna verma',{expiresIn:'24h'})
    const data = {
        token,
        userName:userPassword.name
    }
    res.status(200).json({data})

}
export default CheckUser