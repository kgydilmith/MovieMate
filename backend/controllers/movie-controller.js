export const addmovie =async(req,res,next)=>{
    const extractedtoken = req.headers.authorization;//berare token

    if(!extractedtoken && extractedtoken.trim() ===""){
        return res.status(404).json({message:"token not found"});
    }
    console.log(extractedtoken);
};