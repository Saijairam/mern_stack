import React,{useState} from 'react'
import './AskQuestion.css'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { askQuestion } from '../../actions/question';

const AskQuestion = () => {

   const [questionTitle, setquestionTitle] = useState("");  
   const [questionBody, setquestionBody] = useState("");  
   const [questionTags, setquestionTags] = useState("");  
   
   const dispatch = useDispatch();
   const User = useSelector((state)=>state.currentuserReducer)
   const navigate = useNavigate();

   const handleEnter = (e)=>{
       if(e.key==='Enter'){
        setquestionBody(questionBody+"\n");
       }
   }
   
   const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted : User.result.name ,userId : User?.result?._id},navigate))
   }

  return (
    <div className='ask-question'>
     <div className="ask-ques-container">
       <h1>Ask a Public Question</h1>
       <form onSubmit={handleSubmit}>
         <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
                <h4>Title</h4>
                <p>Be specific and imagine you're asking a question to another person.</p>
                <input type="text" name='questionTitle' onChange={(e)=>setquestionTitle(e.target.value)} id='ask-ques-title' placeholder='Be specific about your question...' />
            </label>
            <label htmlFor="ask-ques-body">
                <h4>Body</h4>
                <p>Include all the information someone would need to answer your question.</p>
                <textarea name="questionBody" onChange={(e)=>setquestionBody(e.target.value)} id="ask-ques-body" cols="30" rows="10" onKeyPress={handleEnter}></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
                <h4>Tags</h4>
                <p>Add up to 5 tags to describe what your question is about.</p>
                <input type="text" name='questionTags' onChange={(e)=>setquestionTags(e.target.value.split(" "))} id='ask-ques-tags' />
            </label>
         </div>
         <input type="submit" value="Review your question" className='review-btn'/>
       </form>
     </div>
    </div>
  )
}

export default AskQuestion