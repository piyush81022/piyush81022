// lodash is a library 
var lodash=require('lodash');
let number=[1,2,3,4,5,6,7,8,9]

//concate
//let newarray=number.concat([2,5])
let newarray =lodash.concat(number,[5,8])
//newarray =lodash.fill(number,0,[start=1],[end=4])
newarray=lodash.reverse(number)
date=lodash.now();
console.log(date)
//console.log(newarray)
function generateSC(name){
    console.log("you have recived a scratch card")

}
//generateSC();
var generate= lodash.once(generateSC);
generate( )
generate()
generate()

