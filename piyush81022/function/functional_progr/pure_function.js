// function displayName(name){
//     console.log(`hello ${name}`)
// }
// displayName("piyush");
// displayName("ranjan")
var greet= 'harami' 
function impure(greet,fname){
    return `this is ${greet} ${fname}`
}
console.log(impure(greet,"carter"))
module.exports={impure,greet}
