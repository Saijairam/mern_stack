import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js';
const app = express();
//middlewares
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
dotenv.config();
//Routes
app.use('/user',userRoutes);
app.use('/questions',questionRoutes);
app.use('/answers',answerRoutes);

app.get('/',(req,res)=>{
    res.send("StackOverflow Backend")
});

const port = process.env.PORT || 5000 ; 
const database_url = process.env.connection_url ; 

mongoose.connect(database_url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(port,()=>console.log(`Port is running on ${port}`))).catch((err)=>console.log(err.message));

