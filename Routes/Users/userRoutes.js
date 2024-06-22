const express=require('express');
const route=express.Router();

route.get('/add',(req,res)=>{
    console.log('user has hit the route to add a user');
})

module.exports=route;