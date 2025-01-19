const Todo = require('../models/Todo')

exports.createtodo =async(req,res)=>{
    try{
        const{title,description}=req.body;
        const response= await Todo.create({title,description})
        res.status(200).json({
            sucess:true,
            data:response,
            message:"entry created Successfully"

        }
           
        );

    }
    catch(error){
        console.error(err);
        console.log(err);
        res.status(500).json({
            sucess:false,
            data:"internal server error",
            message:err.message

        })
    }
}