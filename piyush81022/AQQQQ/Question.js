// Write a JavaScript function that checks whether a
//passed ring is palindrome or not? 

//const { sum } = require("lodash")

//const { upperCase } = require("lodash")

// function check_Palindrome(str_entry){
// // Change the string into lower case and remove  all non-alphanumeric characters
//    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
// 	var ccount = 0;
// // Check whether the string is empty or not
// 	if(cstr==="") {
// 		console.log("Nothing found!");
// 		return false;
// 	}
// // Check if the length of the string is even or odd 
// 	if ((cstr.length) % 2 === 0) {
// 		ccount = (cstr.length) / 2;
// 	} else {
// // If the length of the string is 1 then it becomes a palindrome
// 		if (cstr.length === 1) {
// 			console.log("Entry is a palindrome.");
// 			return true;
// 		} else {
// // If the length of the string is odd ignore middle character
// 			ccount = (cstr.length - 1) / 2;
// 		}
// 	}
// // Loop through to check the first character to the last character and then move next
// 	for (var x = 0; x < ccount; x++) {
// // Compare characters and drop them if they do not match 
// 		if (cstr[x] != cstr.slice(-1-x)[0]) {
// 			console.log("Entry is not a palindrome.");
// 			return false;
// 		}
// 	}
// 	console.log("The entry is a palindrome.");
// 	return true;
// }
// check_Palindrome('madam');
// check_Palindrome('nurses run');
// check_Palindrome('fox');

//    QQ  write a js function that return a passed string with leter in alphabetical order
// function alpha(str){
//     let string=str.split('').sort().join('')

//     //let y=string.sort()
   
//     console.log(`'${string}'`)
// }
// alpha('zxcvbnmfdsahjklpoiuytrewq')
//  function convert(str){
//     let narray=[]
//       let array=str.split(" ")
//       for(let i=0;i<array.length;i++){
//        array1=array[i].charAt(0).toUpperCase()
//          narray.push(array1+array[i].slice(1))
//          y=narray.join(" ")
//       //ay)console.log(narr

//     }
//     return y
//  }
//  console.log(convert("the quick brown fox"))
// let arr =["this", "tgggggg" ,"ranjan"]
// let arr1=arr[0].length
// let arr2=arr[1].length
// let arr3=arr[2].slice(1)
// console.log(arr1,arr2,arr3)
//question 
// let number=12345678910;
// function no(number){
// number=`'${number}'`
// let arr=number.split('')
// y=arr.length-2
// console.log(y)
/// }
// no(number)
// function long(str){
//   let arr=str.split(" ")

//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//       var temp=arr[i]
//       arr[i]=arr[i+1]
//       arr[i+1]=temp;
//     }
//     console.log(arr)
//   }
// }
// long("thmkms is kpiyush")
//literl in javascript
// const object={ starter:'Hello, My name is',fiestname:'john',lastName:'Doe'}
//  let name = `${object.starter} ${object.fiestname} ${object.lastName}`
//  console.log(name)
//using common js
// const letter=['a','b','c'];
// letter.forEach((x)=>{
//   console.log(x)p;'okljjjjjjj

// })
//write a javascript function that accept a string as a parameter 
//and counts the number ofvowel within the string 
// function vowel(str1){
//     var vowel_loist='aeiouAEIOU';
//     var vcount=0
//     for(var x=0;x<str1.length;x++){
//         if(vowel_loist.indexOf(str1[x])!==-1){
//             vcount+=1;

//         }

//     }
//     return vcount;
// }
// console.log( vowel('the quick brown fox'))
//question to form a matrix
// function matrix(n){
//     let arr=[]

//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//                if(i==j){
//                     console.log("1")          
//                }
//                else { 
//                 console.log("0")
//                }
//             }
//             console.log("__________")
//         }
        
//    } 
//    matrix(4)      
//qqq write a js function which takes an array of number stored and 
// find the second and lowest and second greatest number respectively
// function arrange(arr){

//     for(let i=0;i<arr.length;i++){
//         for(let j =0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 //swaping is done here
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp;
    
//             }

//         }
        
//     }
//   console.log(arr[1],arr[arr.length-2}
// arrange([6,5,7,8,1,2])
// function perfect(num){
//     let sum=[]
//     let sum1=0
//     for(let i=1;i<=num;i++){
//         if(num%i==0){
//             //console.log(i)
//               //sum=sum+i;
//               sum.push(i)
//              //console.log(sum)
         
//         }

//     }
//     // if(sum==2*num){
//     //     console.log('this is perfect number')
//     // }
//     // else{console.log("this is not a perfect number")}
// console.log(sum)

// }
// perfect(8128)

//console.log(47%25)
// let s="piyush"
// let a;
// let arr=[]
// console.log(s.split('').sort().join(''));









         





