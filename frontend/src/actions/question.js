import React from 'react'
import * as api  from '../api'

//Questions part

export const askQuestion = (questionData,navigate) => async(dispatch) => {
   try {
    const {data} = await api.postQuestion(questionData);
    dispatch({type:"POST_QUESTION",payload:data});
    dispatch(fetchAllQuestions());//Instead of refresh run fetchqns action to get all qns....
    navigate('/');
   } catch (error) {
     console.log(error.message)
   }
}


export const fetchAllQuestions = ()=> async(dispatch)=>{
  try {
    const {data} = await api.getAllQuestions();
    dispatch({type:"FETCH_ALL_QUESTIONS",payload:data});
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteQuestion = (id,navigate)=> async(dispatch)=>{
   try {
      const {data} = await api.deleteQuestion(id);
      dispatch(fetchAllQuestions());
      navigate('/');
   } catch (error) {
    console.log(error.message)
   }
}

//Answers Part

export const postAnswer = (answerData) => async (dispatch)=>{
   const {id,noofanswers,answerBody,userAnswered,userId} = answerData;
   try {
    const {data} = await api.postAnswer(id,noofanswers,answerBody,userAnswered,userId);
    dispatch({type:"POST_ANSWER",payload:data});
    dispatch(fetchAllQuestions());
   } catch (error) {
    console.log(error.message)
   }
}

export const deleteAnswer = (id,answerId,noofanswers) => async(dispatch)=>{
    try {
       const {data} = api.deleteAnswer(id,answerId,noofanswers);
       dispatch(fetchAllQuestions());
    } catch (error) {
      console.log(error.message)
    }
}

//Voting functionality  ..... 
export const voteQuestion = (id,value,userId)=>async(dispatch)=>{
  try {
     const {data} = await api.voteQuestion(id,value,userId);
     dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error.message)
  }
}