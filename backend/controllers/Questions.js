import Questions from '../models/Questions.js';
import mongoose from 'mongoose';

export const AskQuestion = async (req,res)=>{
    const postQuestionData = req.body;
    const postQuestion = new Questions(postQuestionData)
    try {
        await postQuestion.save();
        res.status(200).json("Posted Question Successfully..");
     } catch (error) {
        res.status(500).json({message:error.message,location:"AskQuestion controller"})
     }
}

export const getAllQuestions = async (req,res)=>{
    try {
      const questionList = await Questions.find(); //Which get all question list
      res.status(200).json(questionList);
    } catch (error) {
      res.status(404).json({message:error.message,location:"GetallQuestions controller"})
    }
}

export const deleteQuestion = async(req,res)=>{
  const {id : _id }= req.params;
  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).json("Question is unavailable");
  }
  try {
    await Questions.findByIdAndRemove(_id);
    res.status(202).json("Successfully deleted");
  } catch (error) {
    res.status(500).json({message:error.message,location:"deleteQuestion controller"})
  }
}

export const voteQuestion = async (req,res)=>{
   const {id : _id} = req.params;
   const {value , userId} = req.body;

   if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).json("Question is unavailable");
  }

  try {
     const question = await Questions.findById(_id);
     const upIndex = question.upvotes.findIndex((id)=>id===String[userId]);
     const downIndex = question.downvotes.findIndex((id)=>id===String[userId]);

     if(value === "upvote"){
          if(downIndex!==-1){
            //This means user has already down voted the question ... 
            question.downvotes = question.downvotes.filter((id)=> id!== String(userId))
          }
          if(upIndex === -1){
            //That means user didnt upvoted the ans till yet
            question.upvotes.push(userId);
          }else{
              question.upvotes = question.upvotes.filter((id)=> id!==String(userId));
          }
      }else if(value === "downvote"){
        if(upIndex!==-1){
          //This means user has already up voted the question ... 
          question.upvotes = question.upvotes.filter((id)=> id!== String(userId))
        }
        if(downIndex === -1){
          //That means user didnt downvoted the ans till yet
            question.downvotes.push(userId);
        }else{
            question.downvotes = question.downvotes.filter((id)=> id!==String(userId));
        }
     }
    
     await Questions.findByIdAndUpdate(_id,question);
    res.status(200).json("Voted Successfully....");

  } catch (error) {
    res.status(500).json({message:error.message,location:"voteQuestion Controller"})
  }
}