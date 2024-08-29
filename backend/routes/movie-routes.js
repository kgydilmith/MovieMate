import express from "express";
import { addmovie, getmoviesbyid } from "../controllers/movie-controller.js";
import { getallmovies  } from "../controllers/movie-controller.js";

const movieRouter =express.Router();

movieRouter.get("/",getallmovies);
movieRouter.get("/:id",getmoviesbyid);
movieRouter.post("/",addmovie);


export default movieRouter;  