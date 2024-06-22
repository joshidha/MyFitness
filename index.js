const express=require('express');
const app=express();
const connectDb=require('./Database/connection');
connectDb();

app.use('/v1',require('./Routes/Users/userRoutes'));
app.listen(8080,()=>{
    console.log("Listining at port 8080");
})