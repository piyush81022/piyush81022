//question 1
// function sum(x){
//     return function (y){
//         return function (z){
//             return x+y+z;
//         }
//     }
    
// }
// console.log(sum(1)(2)(3))
// function greeting(name='jarvis'){
//     console.log(`hello ${name} `)
// }
// greeting();
// function makeShoppingList(item1='milk',item2='bread',item3='eggs'){
//     console.log(`grossary list `,item1,item2,item3)
// }
// makeShoppingList()
// function area(x,y){
//     const area1=x*y;
//     return area1;
// }
// console.log(area(5,6))
// function monitor(rows,column){
// let numOFMonitor=rows*column;
//     return numOFMonitor;

// }
// console.log(monitor(5,6))
//question 2
/*function countdown(y){
//     for(let i=y;i>=1;i--){
//         console.log(i)
//     }
//     return "DONE" ;
// }
// console.log(countdown(4))*/
// function countdown(num) {
//     let counter = setInterval(function(){
//         num--
//         if(num <= 0){
//             clearInterval(counter)
//             console.log("DONE")
//              }
//        else {
//            console.log(num)
//        }
//     },1000)
// };
// countdown(4);

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }
  
  // //console.log(getRandomInt(3));
  // // expected output: 0, 1 or 2
  
  // //console.log(getRandomInt(1));
  // // expected output: 0
  
  console.log(Math.random());
    const input=[1,[2,[3,[4,[5,[6,[7]]]]]]]
   let emptyarr=[ ]
   emptyarr.push(input[0])
   emptyarr.push(input[1][0])
   emptyarr.push(input[1][1][0])
   emptyarr.push(input[1][1][1][0])
   emptyarr.push(input[1][1][1][1][0])
   emptyarr.push(input[1][1][1][1][1][0])
   emptyarr.push(input[1][1][1][1][1][1][0])
   console.log(emptyarr)
  console.log(input.flat(Infinity).toString())
   const input = [1,[2,[3,[4,[5,[6,[7]]]]]]]
   const result = [];
   function flatten(arr){
     
     for(let i=0; i<arr.length; i++){
       if(Array.isArray(arr[i])){
         flatten(arr[i]);
       }else{
         result.push(arr[i]);
       }
     }
   }
   
   flatten(input);
   console.log(result.toString());
  let num;
  let times = 0;

  let timer = setInterval(function randomGame(){
      num = Math.random()
      times++
      if(num > .45){
          clearInterval(timer);
          console.log(`It took ${times} try/tries`);
      }
  },1000)



randomGame();










