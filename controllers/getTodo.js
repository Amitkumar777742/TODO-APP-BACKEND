const { response } = require('express');
const Todo = require('../models/Todo')

exports.getTodo =async(req,res)=>{
    try{

        const todos = await Todo.find({})

        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched"
        })
        

    }
    catch(error){

        console.error(err);
        res.status(500).json({
            success:true,
            error:err.message,
            message:"Server error"

        })

        
    }
}

exports.getTodoById=async(req,res)=>{
    try{


        const id = req.params.id
        const todo= await Todo.findById({_id:id})

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"data not found by given id"
            })



        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo${id} data is succesfully fetched`,
        })
        


    }
    catch(error){

        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server error"

        })
}
}