import React from 'react'
import './HomeMainbar.css'
import Questions from './Questions'
import {useLocation,useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const HomeMainbar = () => {
  const location = useLocation();

    const user = 123 ; 
    const navigate = useNavigate();

    const questionlist = useSelector(state=>state.questionReducers)
  // var questionlist = [{
  //   _id:1,
  //   upvotes:3,
  //   downvotes:2,
  //   noofanswers:2,
  //   questionTitle:'What is a function?',
  //   questionBody:'It meant to be',
  //   questionTags:["java",'node js','react js','mongo db'],
  //   userId:1,
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"kumar",
  //     answeredOn:"Jan 2",
  //     userId:2,
  //   }],
  //   userPosted:'mano',
  //   askedOn:'jan 1'
  // },
  // {
  //   _id:2,
  //   upvotes:2,
  //   downvotes:0,
  //   noofanswers:0,
  //   questionTitle:'What is a function?',
  //   questionBody:'It meant to be',
  //   questionTags:["javascript",'Python','R'],
  //   userId:1,
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"kumar",
  //     answeredOn:"Jan 2",
  //     userId:2,
  //   }],
  //   userPosted:'mano',
  //   askedOn:'jan 1'
  // },
  // {
  //   _id:3,
  //   upvotes:4,
  //   downvotes:1,
  //   noofanswers:2,
  //   questionTitle:'What is a function?',
  //   questionBody:'It meant to be',
  //   questionTags:["java",'node js','mongo db'],
  //   userId:1,
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"kumar",
  //     answeredOn:"Jan 2",
  //     userId:2,
  //   }],
  //   userPosted:'mano',
  //   askedOn:'jan 1'
  // }];

  const checkAuth = ()=>{
    if(user===null){
      alert("Login or signup to ask question")
    navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
    
  }
  
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
         {
          location.pathname === '/' ? <h1> Top Questions</h1> : <h1>All Questions</h1>
         }
         <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionlist.data === null ? <h1>Loading....</h1> : 
          <>
            <p>{questionlist.data.length} questions</p>
            <>
            {questionlist.data.map((question) => (
                <Questions question={question} key={question._id}/>
              ))}
            </> 
          </>
          
        }
      </div>
    </div>
  )
}

export default HomeMainbar