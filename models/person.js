const mongoose=require('mongoose');
//define the person schema
const personschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,


    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:["chef","manager","waiter"],
        required:true,
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
     },
    address:{
        type:String,

    },
    salary:{
        type:Number,
        required:true
    }

});

const Person=mongoose.model('Person',personschema);
module.exports=Person;