const express = require('express');
const app = express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body



app.get('/', function (req, res) {
  res.send('Hello World')
})








/*
app.get('/chicken',(req,res)=>{
    res.send("Sure sir I would love to serve chicken.")
})

app.get('/idli',(req,res)=>{
  var customized_idli={
    name:"rava idli",
    size:"10 cm diameter",
    is_sambhar:true,
    is_chutney:false

  }
    res.send(customized_idli);
})
*/

//Import the router files for person
const personRoutes=require('./routes/personroutes');
app.use('/person',personRoutes);

//import the router files for menu
const menuitemroutes=require('./routes/menuitemroutes');
app.use('/menu',menuitemroutes);


app.listen(3000,()=>{

  console.log("Listening on port 3000")
})