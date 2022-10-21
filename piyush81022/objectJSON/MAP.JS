// let person={firstname:"piyush",
// lastname:'ranjan'}
// //maps will behave  like same way as object  
// let mobj=new Map()

// mobj.set('firstname','piyush')
// console.log(mobj.size)
// console.log(person)
// console.log(typeof(mobj))
// console.log(mobj.get("lastname"))//undefined
// const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];
// const arr= heros.map(function(x,y){
//     return {id:x ,piyush:y.name}
// })
// console.log(arr)
let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);


