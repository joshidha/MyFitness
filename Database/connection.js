const mongoose=require('mongoose');
const connection=async()=>{
    try{
        const con=await mongoose.connect("mongodb+srv://dharmenderjoshics2017pgdav:Dheeraj22@cluster0.qkl5sy9.mongodb.net/");
        console.log(`connection established with database`);
    }
    catch(err){
        console.log(err); 
    }
}
module.exports=connection;