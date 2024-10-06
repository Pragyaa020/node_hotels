 const mongoose=require('mongoose');

 require('dotenv').config();
 //Define the mongodb connection url
 //const mongoURL=process.env.MONGODB_URL_LOCAL;

 const mongoURL=process.env.MONGODB_URL;

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
