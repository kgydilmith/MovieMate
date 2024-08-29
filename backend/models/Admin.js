import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        minlength:6,
        require:true
    },
    addedMovies:[{
        type:mongoose.Types.ObjectId,
        ref:"Movie", 
    },
],
});

export default mongoose.model("Admin",adminSchema);