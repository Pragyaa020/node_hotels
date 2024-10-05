// function add(a,b){
//     return a+b;
// }
var add=function(a,b){
    return a+b;
}

// var sub=(a,b)=>{return a-b;}
var sub=(a,b)=>a-b;

var result=add(2,8);
var result2=sub(8,2);
console.log(result);
console.log(result2);

(function(){
    console.log("Pragya is ");
})();

function callback(){
    console.log("this is a callback function");

}

const addok=(a,b,callback)=>{
    var result1=a+b;
    console.log("result : ",result1);
    callback();
}

addok(2,3,callback);

const sub1=(a,b,pragya)=>{
    var result=a-b;
    console.log("result:",result);
    pragya();
}

sub1(10,4,()=>
    console.log("Hi,I'm Pragya.")
);

