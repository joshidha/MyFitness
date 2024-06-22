const express=require('express');
const app=express();
require('dotenv').config();
const connectDb=require('./Database/connection');
connectDb();
const port=process.env.PORT;
app.use('/v1',require('./Routes/Users/userRoutes'));
app.listen(port,()=>{
    console.log(`Listining at port ${port}`);
})