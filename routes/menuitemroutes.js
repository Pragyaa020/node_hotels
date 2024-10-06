const express=require('express');
const router=express.Router();
const menuitem=require('./../models/menuitem');

//post method for menu
router.post('/',async(req,res)=>{
    try{
      const data=req.body;
      const newmenuitem=new menuitem(data);
  
      const response=await newmenuitem.save();
      console.log("Data saved");
      res.status(200).json(response);
  
    }
    catch(err){
      console.error("Error");
      res.status(500).json({error:"Internal server error."});
    }
  })
  
  //get methid for menu
  router.get('/',async(req,res)=>{
    try{
      const data=await menuitem.find();
      console.log('data fetched');
      res.status(200).json(data);
  
      
    }
    catch(err){
      console.error("Error:",err);
      res.status(500).json({error:'Internal server error.'});
    }
  })

  router.get('/:taste',async(req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=="sweet"||taste=="sour"||taste=="spicy"){
            const response=await menuitem.find({taste:taste});
        console.log("data fetched");
        res.status(200).json(response);
        }
        else{
            res.status(404).json({error:"Invalid Taste."});
        }
}
    catch(err){
        console.error(err);
        res.status(500).json({error:"Internal server error"});

    }
  })
  router.put('/:id',async(req,res)=>{
    try{
    const menuid=req.params.id;
    const updateddata=req.body;

    const response=await menuitem.findByIdAndUpdate(menuid,updateddata,{
      new:true,
      runValidators:true,
})

if(!response){
  return res.status(404).json({error:"Menu item not found."});
}

console.log("Data updated.");
res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error."});
    }

  })


router.delete("/:id",async(req,res)=>{
  try{

    const menuid=req.params.id;
    const response=await menuitem.findByIdAndDelete(menuid);

    if(!response){
      return res.status(404).json({error:"Menu item not found. "});
    }

    console.log("Menu item deleted");
    res.status(200).json({message:"Menu Item deleted."});
    

  }
  catch(err){
    console.log(err);
    res.status(500).json({error:"Internal server error."});
  }
})
//comment added for testing purpose
  module.exports=router;