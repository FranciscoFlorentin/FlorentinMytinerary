const Comment= require("../models/Comment");

const commentController= {
    addComment:(req,res)=>{
        const newComment=new Comment(req.body);
        newComment.save()
        .then(async loadedComment=>{
            const populateComment= await loadedComment.populate("idItinerary").execPopulate()
            res.json({sucess:true, response: populateComment})
        })
        .catch(error=>{return res.json({sucess:false, response: "Fail to load new Comment"})})
    },
    getComments:(req,res)=>{
        Comment.find().populate("idItinerary")
        .then(data=>{return res.json({sucess:true, response:data})})
        .catch(error=>{return res.json({sucess:false, response:"Fial to get all comments"})})
    }
}

module.exports= commentController;