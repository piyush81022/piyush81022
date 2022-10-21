
// function armstrong(n){

//    let y=n.charAt(0)*n.charAt(0)*n.charAt(0)
//    let x=n.charAt(1)*n.charAt(1)*n.charAt(1)
//    let z=n.charAt(2)*n.charAt(2)*n.charAt(2)
//    if((x+y+z)==n){
//     console.log("yes this is armstrong number" ,n)

// }
// else{
//     console.log("this is not a armstrong number ")
// }

// }
// let str='371'
// armstrong(str)

// let n=5;
// for(let j=1;j<=n;j++){
//     for(let i=1;i<=n;i++){
//         console.log(i)
//     }
//     console.log("\n")
// }

int i ,j,k=1;
for(i=1;i<=5 ; i++){
   for(j=1;j<=9;j++){
    if(j>=6-i&&j<=4+i&&k){
        cout<<"*";
        k=0;
    }
    else{
        cout<<"\n"
        k=1;
    }
   }
}