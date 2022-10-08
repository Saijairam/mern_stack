import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import users from '../models/auth.js'


export const signup = async (req,res)=>{
  const {name,email,password} = req.body;
  try {
    const existingUser = await users.findOne({email});
    if(existingUser){
      res.status(404).json("User already exists...");
    }
    const hashedpassword = await bcrypt.hash(password,12);
    const newuser = await users.create({name,email,password:hashedpassword});
    const token = jwt.sign({email:newuser.email,id:newuser._id},process.env.JWT_SECRET_KEY,{expiresIn:'30d'}); //in sign func we have to give secret password
    res.status(200).json({result:newuser,token})

  } catch (error) {
    res.status(500).json("Something went wrong on signup page")
    console.log(error.message);
  }
}

export const login = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const existuser = await users.findOne({email});
        if(!existuser){
            res.status(404).json("User does not exist with this email id.")
        }
        const isPasswordcrt = await bcrypt.compare(password,existuser.password);
        if(!isPasswordcrt){
            res.status(400).json("Credentials are incorrect")
        }
        const token = jwt.sign({email:existuser.email,id:existuser._id}, process.env.JWT_SECRET_KEY,{expiresIn:'30d'}); //in sign func we have to give secret password
        res.status(200).json({result:existuser,token})

    } catch (error) {
        res.status(500).json("Something went wrong in Login page")
        console.log(error.message)
    }
}