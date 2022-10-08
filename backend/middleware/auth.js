import jwt from 'jsonwebtoken';

const auth = (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];

        let decoedData = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.userId = decoedData?.id;
        next();
    } catch (error) {
        console.log({message:error.message,info:"Authorization is not valid in middleware function..."});
    }
}

export default auth;