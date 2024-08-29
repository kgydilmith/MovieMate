import express from "express";
import { deleteUSer,getAllusers, getBookingOfUser, login, signup, updateUser } from "../controllers/user-controller.js";


const userRouter = express.Router();

userRouter.get("/", getAllusers);
userRouter.post("/signup", signup );
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUSer);
userRouter.post("/login",login);
userRouter.get("/bookings/:id",getBookingOfUser);

export default userRouter;
