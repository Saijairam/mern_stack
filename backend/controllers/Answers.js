import Questions from '../models/Questions.js';
import mongoose from 'mongoose';

export const postAnswer = async(req,res)=>{
   const {id : _id} = req.params;
   const {noofanswers , answerBody , userAnswered,userId} = req.body;

   if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(403).send('Question is unavailable');
   }
    updatednoofanswers(_id , noofanswers) ;

   try {
    const updatedQuestion = await Questions.findByIdAndUpdate(_id,{$addToSet : {'answer' : [{answerBody, userAnswered , userId}]}});
    res.status(200).json(updatedQuestion);
   } catch (error) {
     res.status(404).json({message:error.message,location:"postAnswer controller"})
   }
}

const updatednoofanswers = async(_id,noofanswers)=>{
    try {
        await Questions.findByIdAndUpdate(_id,{$set : {'noofanswers':noofanswers}});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteAnswer = async(req,res)=>{
   const {id : _id} = req.params;
   const {answerId , noofanswers} = req.body;

   if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(403).send('Question is unavailable');
   }

   if(!mongoose.Types.ObjectId.isValid(answerId)){
    return res.status(403).send('Answer is unavailable');
   }

   updatednoofanswers(_id,noofanswers);
   try {
     await Questions.updateOne({_id},{$pull : {'answer' : {_id : answerId }}});
     res.status(200).json("Successfully answer deleted.")
   } catch (error) {
     res.json(500).json({message : error.message , location : "DeleteAnswer controller"})
   }
}