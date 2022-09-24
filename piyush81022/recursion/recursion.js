// function countdown(Number){
//     console.log(Number)
//     const newnumber= Number-1
//   if(newnumber>0){
//     countdown(newnumber);

//   }  
//   console.log(Number)  
// }
// countdown(4)
//function factorial(x) {

    // if number is 0
//     if (x === 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 3;
// console.log(factorial(5))

// // calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }
//sum of n natural number
// function sum(n){
//     if(n<=0){
//         return 0;
//     }
//     else {
//         return n+sum(n-1);
//     }
// }
//console.log(sum(10))
// function growBeanstalk(years) {
//     if (years <= 0) {
//       return 0;
//       }
//           else if (years <= 2) {
//           //console.log(1);
//           return 1;
//       } 
//        console.log("recursion of " + years + ":")
//        console.log(years-1);
//        console.log(years-2)
//            return growBeanstalk(years - 1) + growBeanstalk(years - 2);
//     }
//     growBeanstalk(5);

// function fibonacci(n){
//     if(n < 2) return n
//     return fibonacci(n-1) + fibonacci(n-2)
//    }
   
//    const num = 7;
   
//    for(let i = 0; i<num;  ++i){
//     console.log(fibonacci(i))
//    }
//const obj1 = {first: 20, second: 30, first: 50}; console.log(obj1);
arr=[1,2,5,2,6]
arr.reverse()
let p='piyush'
console.log(arr + p)