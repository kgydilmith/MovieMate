import express from "express";
import { addAdmin} from "../controllers/admin-controller.js";
import { adminlogin } from "../controllers/admin-controller.js";


const adminRouter = express.Router();
adminRouter.post("/signup",addAdmin);
adminRouter.post("/login",adminlogin);

export default adminRouter;  