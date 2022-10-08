import React from 'react'
import { Link,useParams } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar';
import moment from 'moment';
import { useSelector,useDispatch } from 'react-redux';
import {deleteAnswer} from '../../actions/question.js'


const DisplayAnswer = ({question,handleShare}) => {
  const User = useSelector(state=>state.currentuserReducer);
  const {id} = useParams();
  const dispatch = useDispatch();
  const handleDelete = (answerId,noofanswers) => {
    dispatch(deleteAnswer(id,answerId,noofanswers-1))
  }
  return (
    <div>
        {
          question.answer.map((answer)=>(
            <div className="display-ans" key={answer.answerBody}>
               <p>{answer.answerBody}</p>
               <div className="question-action-user">
                 <div>
                     <button type='button' onClick={handleShare}>Share</button>
                    {
                         User?.result._id === answer?.userId && (
                          <button type='button' onClick={()=>handleDelete(answer._id,question.noofanswers)}>Delete</button>
                        )
                    }
                 </div>
                 <div>
                  <p>answered on {moment(answer.answeredOn).fromNow()}</p>
                  <Link to={`/Users/${answer.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                            <Avatar backgroundColor='green' px='8px' py='5px'>{answer.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                            <div>
                                                {answer.userAnswered}
                                            </div>
                                        </Link>
                 </div>
               </div>
            </div>
          ))
        }
    </div>
  )
}

export default DisplayAnswer