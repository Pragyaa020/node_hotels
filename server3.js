var _ =require('lodash');
const notes=require("./notes.js");
console.log("server file is available.");
var age=notes.age;
console.log(age);
notes.addNumber(age,9);
var data=["person","person",1,1,2,2,"ok","ok"];
var filter=_.uniq(data);
console.log(filter);
console.log(_.isString(3));

