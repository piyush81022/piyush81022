// const { reverse } = require("lodash");

// function bblSort(arr){
     
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
//           reverse(arr[j+1])
//         }
//       }
//     }
//     // Print the sorted array
//     console.log(arr);
//    }
     
     
//    // This is our unsorted array
//    var arr = [234, 43, 55, 63,  5, 6, 235, 547];
     
     
//    // Now pass this array to the bblSort() function
//    bblSort(arr);\
/*question no 1 
   function short(arr){
  
    //  condition for cheaking the index value 
       for(let i=0;i<arr.length;i++){
           for(let j=0; j<arr.length-i-1;j++){
               if(arr[j]>arr[j+1]){
                   //swap method
                   var temp=arr[j]
                   arr[j]=arr[j+1]
                   arr[j+1]=temp
               }
              //console.log
           }
          // console.log(arr)
       }
       return arr
   }
   let arr=[3,9,8,10,7,1]
   console.log(short(arr))      */
   // question no 2 in shorting rechnique
   /*function insertion(arr){
    for(let i=0; i<arr.length;i++){
      let current =arr[i];
      let j=i-1;
      while(  j>=0 && current < arr[j]){
        arr[j+1]=arr[j]
      j=j-1;
      }
      arr[j+1]=current ;

    }
   console.log(arr)
  }
  let arr=[43,6,78,28,66]
   insertion(arr)
*/
//

// Javascript program for insertion sort 
   
// Function to sort an array using insertion sort



// function insertionSort(arr, n) 
// { 
//     let i, key, j; 
//     for (i = 1; i < n; i++)
//     { 
//          key = arr[i]; 
//          j = i - 1; 
   
//           /* Move elements of arr[0..i-1], that are 
//           greater than key, to one position ahead 
//           of their current position */
//           while (j >= 0 && arr[j] > key)
//         { 
//             arr[j + 1] = arr[j]; 
//             j = j - 1; 
//         } 
//         arr[j + 1] = key; 
//     } 
//     console.log(arr)
// }
// let arr = [12, 11, 10,52,47,89,13, 5, 6 ]; 
// let n = arr.length; 
// insertionSort(arr, n);
// function merge(left,right){
//   let sortedarr=[]
//   while(left.length && right.length ){
//     // insert the smallest element to the sorted arr
//     if(left[0]<right[0]){
//       sortedarr.push(left.shift())
//     }
//     else {
//       sortedarr.push(right.shift())
//     }
//   }
// }
// function quicksort(arr,start,end){
//   if(start>=end){
//     return ;
//   }
//   let p=partition(arr,start,end)
//   // p is the correct index of the pivot element  
//   quicksort(arr,start,p-1)
//   quicksort(arr,p+1,end)
// }
// function  partition(arr,start,end){
//   //find the no  of element smaller than pivot
//   let pivot =arr[0]
//   let  count =0

//   // count the no of element smaller than pivot 
//   for(let i=start+1;i<=end;i++){
//     if(arr[i]<=pivot){
//       count++
//     }
//   }
//   // b put pivatee element in the correct position 
//   let pivotindex=start+count;
//   let t=arr[pivotindex];
//   arr[pivotindex]=arr[start]
//   arr[start]=t
//   // c put elements smaller than pivot on left and larger than pivot on the right 
//   let i=start
//   let  j=end;
//   while(i<pivotindex && j>pivotindex){
//     while(arr[i]<=pivot){
//       i++;
//     }
//     while(arr[j]>= pivot){
//       j--;
//     }
//     if(i<pivotindex && j>pivotindex){
//       let t =arr[i]
//       arr[i]=arr[j]
//       arr[j]=t;
//     }

//   }
//   return pivotindex
// }
// arr = [5,4,1,2,3,40,9,8,7,4]
// quicksort(arr, 0, 9)
// console.log(arr)
















 



