// a uitillity function to swap two element 
// function swap(arr,i,j){
// 	const temp=arr[i]
// 	    arr[i]=arr[j]
// 		arr[j]=temp

// }
// this function takes last element as pivott places the pivot ele
 // at its correct position in sorted arr the pllace whwre all smaller
 // then pivot to left and all greaater element to right of pivot
//  function partition(arr,low,high){
// 	const pivot=arr[high]
// 	let i=(low-1)
// 	for(let j=low;j<=high-1;j++){
// 		if(arr[j]<pivot){
// 			//increament of index of smaller element 
// 			i++;
// 			swap(arr,i,j)
// 		}
// 	}
// 	swap(arr,i+1,high)
// 	return (i+1)
//  }
//  function quicksort(arr,low,high){
// 	if(low<high){
// 		const pi=partition(arr,low,high);
// 		quicksort(arr,low,pi-1)
// 		quicksort(arr,pi+1,high)
// 	}
//  }
// // deiver code 
// const arr=[10,5,8,3,1,9,4,56,85,987,999,99,9,9,9,9,9,9,66,52,2,222]
// const n=arr.length;
// quicksort(arr,0,n-1)
// console.log(arr)
// function countarr(arr,n){
//     let k=arr[0]
//     for(let i=0;i<n;i++){
//         k=max(k,arr[i])
//     }
//     let  count=arr[0]
//       for(let i=0;i<n;i++){
//         count[arr[i]]++
//       }    
//       for(i=0;i<=k;i++){
//         count[i]+=count[i-1]
//       }
//       let output[0]]
//       for(i=0;i>=0;i--){
//         output[--count[arr[i]]]=arr[i]
//       }

//       for(i=0;i<0;i++){
//         arr[i]=output[i]
//       }
//       return 0
// }
// let arr=[7,8,9,9,6,5,4,1,2,3,6,5]
// countarr(arr,9)
// for(let i=0;i<9;i++){
//     console.log(arr[i])
// }
function countingSort(arr, min, max)
  {
    var i, z = 0, count = [];
 
    for (i = min; i <= max; ) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}
var arra = [3, 0, 2, 5, 4, 1]; 
console.log(arra.length);
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(countingSort(arra, 0, 5));












