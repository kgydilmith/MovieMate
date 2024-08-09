import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    actors:[{type:String,required:true}],

    releasedate:{
        type:Date,
        require:true
    },
    posterurl:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
    },
    booking:[{type:String}],

    admin:{
        type:String,
        required:true
    },
});

export default mongoose.model("Movie",movieSchema);