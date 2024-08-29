import jwt from "jsonwebtoken";
import Movie from "../models/Movie.js";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

export const addmovie = async (req, res, next) => {
  const extractedtoken = req.headers.authorization.split(" ")[1]; //berare token

  if (!extractedtoken && extractedtoken.trim() === "") {
    return res.status(404).json({ message: "token not found" });
  }
  let adminId;

  //verify token
  jwt.verify(extractedtoken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` });
    } else {
      adminId = decrypted.id;
      return;
    }
  });

  //create new token
  const { title, description, releasedate, posterurl, featured, actors } =
    req.body;
  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() == "" &&
    !posterurl &&
    posterurl.trim() === ""
  ) {
    return res.status(422).json({ message: "invalid inputs" });
  }

  let movie;
  try {
    movie = new Movie({
      title,
      description,
      releasedate: new Date(`${releasedate}`),
      featured,
      actors,
      admin: adminId,
      posterurl,
    });

    const session = await mongoose.startSession();
    const adminUser = await Admin.findById(adminId);
    session.startTransaction();
await movie.save({session}); 
adminUser.addedMovies.push(movie);
await adminUser.save({session});
await session.commitTransaction();
    
  } catch (err) {
    return console.log(err);
  }

  if (!movie) {
    return res.status(500).json({ message: "requiest fail" });
  }
  return res.status(201).json({ movie });
};

//get movie

export const getallmovies = async (req, res, next) => {
  let movies;
  try {
    movies = await Movie.find();
  } catch (err) {
    return console.log(err); // Handle the error, pass it to the next middleware
  }
  if (!movies) {
    return res.status(500).json({ message: "request failed " });
  }
  return res.status(200).json({ movies });
};

//getmoviesbyid

export const getmoviesbyid = async (req, res, next) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findById(id);
  } catch (err) {
    return console.log(err);
  }

  if (!movie) {
    return res.status(404).json({ message: "invalid movie id" });
  }
};
