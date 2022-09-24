// console.log("1")
// console.log("2")
// function getdata(){
//     let n=100000;
//     while(n>0){
//         n--;                           
//     }
//     console.log("3")
// }
// getdata()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

// console.log("4")
//javascript ia asychronously in two scenero 
//if you use any asynchronous method 
// 2 i/o storing something in db fething network 
//set timeout //
console.log("2")
function getdata(){
    setTimeout(()=>{
        console.log("3")
    } ,3000)
}
getdata()
console.log("4")






