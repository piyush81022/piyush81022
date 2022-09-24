// let counter =0
// setInterval(function(){
//   if(counter===10){
//     clearInterval(counter)
//   }
//   else{counter=counter+2
//   console.log(counter)}

const { reject } = require("lodash")

// },2000)
// let count = 0;
// let timer = setInterval(function() {
// 	if(count === 10){
// 		clearInterval(timer)
// } else {
// count = count + 2
// console.log(count)
// }
// }, 2000)
// let promise=new Promise(function(resolve,reject ){
// 	setTimeout(()=>resolve("done"),1000)
// })
// let promise1=new Promise(function(resolve,reject){
// setTimeout(()=> reject(new Error("whoops!")),1000);

// });
// const promise1 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then(function(value){
//   console.log(value);
// });
// function mydisplay(some){
//   console.log(some)
// }
// function myDisplayer(some) {
//   console.log(some)
  //document.getElementById("demo").innerHTML = some;}

// let myPromise = new Promise(function(Resolve, Reject) {
  
// let y=25;
//   if (y >= 42) {
//     Resolve("this is resolved");
//   } else {
//     Reject("this is rejected");
//   }

// });
// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );
const n1 = Promise.resolve(25)
const n2 = Promise.resolve(69)

function test(arr){
	arr.forEach(function(element){
		element.then(function(value){
			if(value > 42){ 
			    console.log('This is resolved')
			}else {
			   console.log("This is rejected");
			}
});
});
}

test([n1, n2])












