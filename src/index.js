import 'dotenv/config';
import "./db";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import appleRouter from './routers/appleRouter';
import noticeRouter from './routers/noticeRouter';

const corsOptions={
  origin:["http://localhost:5172","http://localhost:5173","http://localhost:3000"]
}
const PORT=process.env.PORT;
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// const middle=(req,res,next)=>{
//   console.log(`${req.method} ${req.url}`);
//   next();
// };
// app.use(middle); //이거 대신 morgan 설치했음

app.get("/",(req,res)=>res.send({name:"je"}));
app.use("/apple",appleRouter);
app.use("/notice",noticeRouter)

app.listen(PORT , () => console.log(`http://localhost:${PORT}`));