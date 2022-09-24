

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let arr3=`${arr_1} ${arr_2}`;
var sum = 0;
var summ=0;
  
// Running the for loop
for (let i = 0; i < arr_1.length; i++) {
    sum += arr_1[i];
}
console.log(sum);   
for(let j=0; j< arr_2.length; j++ ) {
    
   summ +=arr_2[j];


}  
console.log(summ) ;       
add= sum+summ;
console.log(add +"  adding the array arr1 and arr2")
//method 2 for solving question 
// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; 
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
// sum=0
// for (i=0;i < arr_1.length; i++){
//     sum+=arr_1[i]

// }
// for(j=0;j<arr_2.length; j++){
//     sum+=arr_2[j]
// }
// console.log(sum)



