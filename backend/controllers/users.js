import mongoose from "mongoose"
import User from '../models/auth.js';

export const getAllUsers = async (req,res)=>{
   try {
      const allUsers = await User.find();
      const allUsersdetails = [];
      allUsers.forEach((user)=>{
        allUsersdetails.push({ _id : user._id , name : user.name , about : user.about , tags : user.tags , joinedOn : user.joinedOn});
      });
       res.status(200).json(allUsersdetails);
      //  console.log(allUsersdetails);
   } catch (error) {
     res.status(500).json({message:error.message , location : "getAllusers controller"})
   }
}

export const updateProfile = async (req,res)=>{
   const {id:_id} = req.params;
   const {name,about,tags} = req.body;
   if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(403).send('User is not available');
   }
   try {
     const updatedProfile = await User.findByIdAndUpdate(_id , {$set : {'name':name , 'about' : about , 'tags' : tags}} , { new : true});
     res.status(200).json(updatedProfile);
   } catch (error) {
     res.status(405).json({message:error.message,location:"updateProfile controller"})
   }
}