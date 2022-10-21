// function showtime(){
//     let DateTime=new Date()
//     let time=DateTime.toLocaleString()
//     console.log(time)
//     setTimeout(showtime,3000)
// }
// showtime()

// function randomGame(randomnumber){
//     let count=0
    

// }





// let randomNumber = Math.random()
// if(randomNumber>)
// console.log(randomNumber)
// function recurse(start,end){
//     if(start>end){
//         return 
//       }
//       console.log(start)
//      recurse(start+1,end)
    
// }
// recurse(1,5)


function prime(n){
  for(let i=2;i<=n;i++){
    if(i==n){
      console.log("Yes")
      break;
    }
    if(n%i==0){
      console.log(" yes this is prime")
      break;
    }
    else{
      console.log("No")
      break;
    }
  }

}
prime(5)