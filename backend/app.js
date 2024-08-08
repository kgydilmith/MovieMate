import express from "express"; //import expresss
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";

dotenv.config();
const app = express(); // express handle all of funtion in app

//middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.ay6gydy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() =>
    app.listen(3000, () => console.log(" connetde to db and server is runing"))
  )
  .catch((e) => console.log(e));

//create api route
//url path,call back funtion
// app.use("/",(req,res,next)=>{
//   res.send("hi");
// });

// //open the server
// app.listen(3000,() =>{
//   console.log('conntect to localhost port ${3000}');
// });
