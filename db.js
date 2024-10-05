 const mongoose=require('mongoose');


 //Define the mongodb connection url
 const mongoURL='mongodb://localhost:27017/hotels'

 //set up Mongodb connection
 mongoose.connect(mongoURL);

 const db=mongoose.connection;
 db.on('connected',()=>{
    console.log("Connected to MongoDB server.");
 })

 db.on('disconnected',()=>{
    console.log("MongoDb disconnected");

 })

 db.on('error',(err)=>{
    console.log('MongoDb connection error:',err);
 })

 //export the database connection
 module.exports=db;
