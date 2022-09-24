// searching algorithm
// linear ,binary 
// function linears(values,arr){
//     let i=0
//     while(i<arr.length){
//         if(arr[i]===values){
//             console.log("found",i)
//             break;
//         }
//         else {  
//             i++
//         }
//     }
//     if(i>=arr.length){
//         console.log("not found")
//     }
// }
// let arr=[8,9,56,5,6,2,1,4,7,8]
// linears(2,arr)
// function linears(value,arr){
//     let index=0
//     let found=false
//     while(index<arr.length){
//         if(arr[index]===value){
//             found=true
//             break;
//         }

//         else{ 
//             index++
//         }
//     }
//     return found;
// }
// let arr=[8,9,56,5,6,2,1,4,7,8]
// let found=linears(2,arr)
// if(found===true){
//      console.log("found at ",found)
// }
// else{ 
//     console.log("not found")
// }
// function binarys(arr,val,start,end){
//     //bade condition
//     if(start>end){
//         return 
//     }
//     let mid=Math.floor((start+end)/2)



//     if(arr[mid]===val){
//         return mid
//     }
//     if(arr[mid]>val){
//         //if element at mid is grater than val

//         binarys(arr,val,start,mid-1)

//     }
// else { 
//     //if element is smaller than val
//     binarys(arr,val,mid+1,end)

// } 
// }
// let arr=[1,2,3,,4,5,6,7,8,9]
// let x=1;
// console.log(binarys(arr,x,0,arr.length-1)
// function binary(arr,value,s,e){
//     if(s>e){
//         return 
//     }
//     let mid=Math.floor((s+e)/2);
//     //let mid1=(s+e)/2;
//     if(arr[mid]===value){
//         console.log(mid)
//     }
//     else if(arr[mid]<value){
//         binary(arr,value,mid+1,e)
//     }
//     else if(arr[mid]>value){
//         binary(arr,value,s,mid-1)
//     }
    
// }
// let arr=[1,2,3,4,5,6,7,18]
// binary(arr,18,0,arr.length-1)

//  function bs(arr,value,s,e){
//      let mid=Math.floor((s+e)/2);
//      if(s>e){
//         console.log("wrong input") 
//      }
//      if(arr[mid]===value){
//       console.log("Element found at position -", mid)
//      }
//      else if(arr[mid]<value){
//          bs(arr,value,mid+1,e)
//      }
//      else if(arr[mid]>value){
//          bs(arr,value,s,mid-1)
//      }
//     else { 
//         console.log("Element not found")
//         }
//  }
//  const eleToSearch = 99

//  const arr = [55,88,99,5,66]
//  //bs(arr,eleToSearch,0,arr.length-1)

//  function bblSort(arr){
     
//     for(var i = 0; i < arr.length; i++){
        
//       // Last i elements are already in place  
//       for(var j = 0; j < ( arr.length - i -1 ); j++){
          
//         // Checking if the item at present iteration 
//         // is greater than the next iteration
//         if(arr[j] > arr[j+1]){
            
//           // If the condition is true then swap them
//           var temp = arr[j]
//           arr[j] = arr[j + 1]
//           arr[j+1] = temp
//         }
//       }
//     }
//     // Print the sorted array
//     console.log( bs(arr,eleToSearch,0,arr.length-1));
//    }
// bblSort(arr)
// function insertion(arr,n){
//     let i,key,j
//     for( i=1;i<n;i++){
//        key=arr[i]
//        j=i-1;
//        while( j>= 0 && arr[j]>key){
//            arr[j+1]=arr[j]
//           j=j-1;

//        }
//        arr[j+1]=key
//     }
//     console.log(arr)
// }
// let arr = [43, 6, 78, 28, 66];
// insertion(arr,5)
// function even(num){
//     let y=num%2
	
//     return y==0
     
// }

// const listOfNumbers = [0,1,2,3,4,5,6,7,8,9,10];

// console.log(listOfNumbers.filter(even));

let x=function(name="piyush",lname="ranjan"){
    console.log(name +" " +lname)
}
x("john","carter")
x(this,6)