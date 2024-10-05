const express=require('express');
const router=express.Router();

const Person=require('./../models/person');

//post route to add a person
router.post('/',async(req,res)=>{
    try{
      const data=req.body //assuming the request body contains the person data
    
      //create a new person document using Mongoose model
      const newPerson=new Person(data);
  
      const response=await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
  
    }
  
  })

  //get method
router.get('/',async(req,res)=>{
    try{
      const data=await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
    }
    catch(err){
      res.status(500).json({error:'Internal server error'});
    }
  })

//parameterised call of person
router.get('/:worktype',async(req,res)=>{
    try{
      const worktype=req.params.worktype; //extract the work type from the url parameter
  
      if(worktype=='chef'||worktype=='manager'||worktype=='waiter'){
        const response=await Person.find({work:worktype});
        console.log("response fetched");
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:"Invalid work type."});
      }
    
  
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"Internal Server error"});
  
    }
  })

  router.put('/:id',async(req,res)=>{
    try{
        const id=req.params.id; //extract the id from url parameter
        const updatedpersondata=req.body; //extract the updated data from the input from user

        const response=await Person.findByIdAndUpdate(id,updatedpersondata,{
            new:true, //return the updated document
            runValidators:true, //Run mongooose validation

        });

        if(!response){
          return res.status(404).json({error:"Person not found."});
        }
        console.log("Data updated");
        res.status(200).json(response);





    }
    catch(err){
      console.log("Error",err);
      res.status(500).json({error:"Internal server error."});
    }
  })

  router.delete('/:id',async(req,res)=>{

    try{
      const id=req.params.id;
      const response=await Person.findByIdAndDelete(id);

      if(!response){
        return res.status(400).json({error:"Person not found"});
      }

      console.log("Data deleted");
      res.status(200).json(response);

    }
    catch(err){
      console.log("Error",err);
      res.status(500).json({error:"Internal server error."});
    }
  })

  module.exports=router;