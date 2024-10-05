const jsonstring='{"name" :"john","age":30,"city":"newyork"}';
const jsonobject=JSON.parse(jsonstring);
console.log(jsonobject.name);
console.log(jsonstring);

const objecttoconvert={
    name:"Alice",
    age:25

};
const jsonstringfield=JSON.stringify(objecttoconvert);
console.log(typeof jsonstringfield);
console.log(objecttoconvert.name);