const express= require('express');

const router=express.Router();



const{createtodo}=require("../controllers/createtodo")
const{getTodo,getTodoById}=require("../controllers/getTodo")
const{updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");

router.post('/createtodo',createtodo)
router.get('/getTodo',getTodo)
router.get('/getTodo/:id',getTodoById)
router.put('/updateTodo/:id',updateTodo)
router.delete('/deleteTodo/:id',deleteTodo)
module.exports=router