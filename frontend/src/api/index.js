import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;
    //We should return req. in this, then only data can be accessible for backend purpose.
})

export const Login = (AuthData) => API.post('/user/login',AuthData);
export const Signup = (AuthData) => API.post('/user/signup',AuthData);

export const postQuestion = (questionData) => API.post('/questions/Ask',questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id)=>API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id,value,userId) => API.patch(`/questions/vote/${id}`,{value,userId});


export const postAnswer = (id, noofanswers , answerBody , userAnswered ,userId)=> API.patch(`/answers/post/${id}`,{noofanswers , answerBody , userAnswered,userId});
export const deleteAnswer = (id,answerId,noofanswers) => API.patch(`/answers/delete/${id}`,{answerId,noofanswers});


export const fetchAllusers = () => API.get('/user/getAllUsers');
export const updateProfile = (id , updateData) =>API.patch(`/user/update/${id}` , updateData);

