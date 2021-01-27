const Comment= require("../models/Comment");

const commentController= {
    addComment:(req,res)=>{
        const {userName,userPic,userComment,idItinerary}=req.body;
        const newComment=new Comment({userName,userPic,userComment,idItinerary});
        newComment.save()
        .then(async loadedComment=>{
            const populateComment= await loadedComment.populate("idItinerary").execPopulate()
            res.json({sucess:true, response: populateComment})
        })
        .catch(erro=>{return res.json({sucess:false, response: "Fail to load new Comment"})})
    },
    getComments:(req,res)=>{
        Comment.find()
        .then(data=>{return res.json({sucess:true, response:data})})
        .catch(error=>{return res.json({sucess:false, response:"Fial to get all comments"})})
    }
}

module.exports= commentController;