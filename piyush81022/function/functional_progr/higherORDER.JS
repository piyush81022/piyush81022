// const number=[12,55,44,88]
// const newarr=number.map(testfun)
// function testfun(num){
//     return 2*num;

// }
// console.log(newarr)
//asynchronous 
console.log("step1")
setTimeout(()=>{
    console.log("this will never execute")
},1000)
console.log("step2")
console.log("step3")
console.log("step4")


