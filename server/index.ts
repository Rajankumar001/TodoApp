import express,{Request,Response} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import {router} from './routes/Todoroutes';
const app=express();
  
app.use(cors(
  {
    origin:"http://localhost:5173"
  }
));

const PORT=3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

// middleware


app.listen(PORT,():void=>{
    console.log(`app is listening on ${PORT}`);
});
app.get("/test",(req:Request,res:Response)=>{
    res.json({data:"test page"});
})
mongoose.connect("mongodb+srv://chaudharyrajan387:ONko2gboBL3XQoit@cluster0.th5ubyi.mongodb.net/Todo")
.then(()=>console.log("mongodb connected....."))
.catch((err)=>{
  console.log("error caught ",err);
})