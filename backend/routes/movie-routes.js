import express from "express";
import { addmovie } from "../controllers/movie-controller.js";
import { getmovie } from "../controllers/movie-controller.js";

const movieRouter =express.Router();

movieRouter.get("/",getmovie);
movieRouter.post("/",addmovie);


export default movieRouter; 