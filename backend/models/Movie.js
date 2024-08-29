import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    actors:[{type:String,required:true}],

    releasedate:{
        type:Date,
        require:true,
    },
    posterurl:{
        type:String,
        required:true,
    },
    featured:{
        type:Boolean,
    },
    bookings:[{
        type:mongoose.Types.ObjectId,
        ref:"Booking",
    }],

    admin:{
        type:mongoose.Types.ObjectId,
        ref:"Admin",
        required:true,
    },
});

export default mongoose.model("Movie",movieSchema);