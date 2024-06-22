const mongoose=require('mongoose');
const mongoUri=process.env.MONGOURI;
const connection=async()=>{
    try{
        const con=await mongoose.connect(mongoUri);
        console.log(`connection established with database`);
    }
    catch(err){
        console.log(err); 
    }
}
module.exports=connection;