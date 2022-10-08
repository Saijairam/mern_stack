import React,{useState} from 'react'
import {useParams,Link, useNavigate,useLocation} from 'react-router-dom';
import moment from 'moment';
import upvote from '../../assets/upvote.svg';
import downvote from '../../assets/downvote.svg';
import copy from 'copy-to-clipboard';

import './Question.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer';


import { useSelector,useDispatch } from 'react-redux';
import {deleteQuestion, postAnswer , voteQuestion} from '../../actions/question.js';


const QuestionDetails = () => {
    const [answer, setanswer] = useState("");
    const {id} = useParams();
    const location = useLocation();
    const url = 'http://localhost:3000'
    const questionlist = useSelector(state=>state.questionReducers);
    const User = useSelector(state=>state.currentuserReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlePostAns = (e,answerLength)=>{
        e.preventDefault();
        if(User === null){
            alert("Signup or Login to answer a question");
            navigate('/Auth');
        }else{
            if(answer === ""){
                alert("Enter an answer before submitting!!");
            }else{
               dispatch(postAnswer({id,noofanswers : answerLength+1 ,answerBody : answer , userAnswered : User.result.name, userId : User?.result?._id }))
            }
        }


    }

    const handleShare = ()=>{
       copy(url+location.pathname)
       alert("Copied url :" + url+location.pathname)
    }

    const handleDelete = ()=>{
        dispatch(deleteQuestion(id,navigate));
    }

    const handleupvote = ()=>{
        dispatch(voteQuestion(id,'upVote',User?.result._id))
    }
    const handledownvote = ()=>{
        dispatch(voteQuestion(id,'downVote',User?.result._id))
    }

  return (
    <div className='question-details-page'>
        {
            questionlist.data === null ? <h1>Loading...</h1> : 
            <>
             {
                questionlist.data.filter(question=> question._id === id).map(question=>(
                   
                    <div key={question._id}> 
                        {/* {console.log(question)} */}
                       <section className="question-details-container">
                         <h1>{question.questionTitle}</h1>
                         <div className="question-details-container-2">
                            <div className="question-votes">
                                <img src={upvote} alt="upvote" width='18' className='votes-icon' onClick={handleupvote}/>
                                <p>{question.upvotes.length - question.downvotes.length}</p>
                                {console.log(question.upvotes.length - question.downvotes.length)}
                                <img src={downvote} alt="downvote" width='18' className='votes-icon' onClick={handledownvote}/>
                            </div>
                            <div style={{width:'100%'}}>
                               <p className='question-body'>{question.questionBody}</p>
                               <div className="question-details-tags">
                                 {question.questionTags.map(tag=>(
                                    <p key={tag}>{tag}</p>
                                 ))}
                               </div>
                               <div className="question-action-user">
                                    <div>
                                        <button type='button' onClick={handleShare}>Share</button>
                                        {
                                            User?.result._id === question?.userId && (
                                                <button type='button' onClick={handleDelete}>Delete</button>
                                            )
                                        }
                                        
                                    </div>
                                    <div>
                                        <p>asked on {moment(question.askedOn).fromNow()}</p>
                                        <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                            <Avatar backgroundColor='orange' px='8px' py='5px' textALign='center'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                            <div>
                                                {question.userPosted}
                                            </div>
                                        </Link>
                                    </div> 
                               </div>
                            </div>
                         </div>
                       </section>
                       {
                        question.noofanswers !== 0 && (
                            <section>
                                <h3>{question.noofanswers} Answers</h3>
                                <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                            </section>
                        )
                       }
                       <section className='post-ans-container'>
                          <h3>Your Answer</h3>
                          <form onSubmit={(e)=>{handlePostAns(e,question.answer.length)}}>
                            <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setanswer(e.target.value)}></textarea>
                            <input type="submit" value="Post your answer" className='post-ans-btn'/>
                          </form>
                          <p>
                            Browse other questions tagged {
                                question.questionTags.map((tag)=>(
                                    <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                ))
                            } or 
                            <Link to='/AskQuestion' style={{textDecoration:'none',color:'#009dff'}}>Ask your own question.</Link>
                          </p>
                       </section>
                    </div>
                ))
             }
            </>
        }
    </div>
  )
}

export default QuestionDetails