import express from "express";
import { addmovie } from "../controllers/movie-controller.js";

const movieRouter =express.Router();

movieRouter.post("/",addmovie);


export default movieRouter; 