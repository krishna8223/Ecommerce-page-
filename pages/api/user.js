import mongoose from "mongoose";
import DB from "../../helpers/db";
import User from '../../models/user'
import bcrypt from 'bcrypt'

DB()

const saveUser =async (req,res) => {
    const {name,email,password} = req.body
    const hashPassword =await bcrypt.hash(password,12)
    console.log(hashPassword);
    const user = new User({name,email,password:hashPassword}).save()
    res.status(200).json({done:'Data Successfully added'})
}
export default saveUser