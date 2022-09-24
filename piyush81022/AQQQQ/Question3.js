// class Animal {
// 	constructor(name,specie){
// 		this.name=name;
// 		this.specie=specie;
// 		console.log(this.name,"can sing")
// 	}
// printDetail(){
	
// }
//}
//const dog=new Animal("Dog","pogo")
//dog.printDetail()
// class Animal{
// 	constructor(name,specie){
// 		this.name=name;
// 		this.specie=specie;

// 	}
// 	sing(){
// 		console.log(this.specie,"can sing")
// 	}
// }
// const pogo=new Animal("pogo ","sogo")
// pogo.sing()
// SuperType constructor function
// function SuperType() {
// 	this.name = "John"
// }

// //SuperType prototype
// SuperType.prototype.getSuperName = function(){
// 	return this.name
// }
// //SubType prototype function
// function SubType(){
// 	this.age =26
// }

// //Inherit the properties from SuperType
// SubType.prototype = new SuperType();
// // Add new property to SubType prototype
// SubType.prototype.getSubAge = function(){
// 	return this.age+"cna sing";
// }

// //Create a SubType object
// var subTypeObj = new SubType();
// console.log(subTypeObj.name); //Output: John
// console.log(subTypeObj.age); //Output: 26
// console.log(subTypeObj.getSuperName()); //Output: John
// console.log(subTypeObj.getSubAge()); //Output: 26
// class Animals{
// 	constructor(name,specie){
// 		this.name=name;
// 		this.specie=specie;

// 	}
// }
// Animals.prototype.cansing=function(){
// 	return this.name +" "+"can sing"
// }
// const dog=new Animals("billi","cat")
// console.log(dog.cansing())
// function getmax(arr,n){
// 	let max=arr[0]
// 	for( let i=1;i<n;i++){
// 		if(arr[i]>max){
// 			max=arr[i]
// 		}
// 	}
// }
// function countsort(arr,n,exp){
// 	const output=new Array(n)
// 	let i;
// 	const count=new Array(10)
// 	for(let i=0; i<10;i++){
// 		count[i]=0;
// 	}
// 	for(i=0;i<n;i++){
// 		count[Math.floor(arr[i]/exp)%10]++
// 	}
// 	for(i=0;i<10;i++){
// 		count[i]+=count[i-1]
// 	}
// 	 // Build the output array
// 	for (i = n - 1; i >= 0; i--) {
// 		output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
// 		count[Math.floor(arr[i] / exp) % 10]--;
// 	 }
// 	for (i = 0; i < n; i++){
//             arr[i] = output[i];
// 	}
// }


// function radix(arr,n){
// 	const max=getmax(arr,n)
// for(let exp=1;Math.floor(max/exp)>0; exp=exp*10){
// 	countsort(arr,n,exp)
// }
// }
// let arr=[5,2,1,90,32]
// let n=arr.length
// radix(arr,n)
// console.log(arr)
  

function getMax(arr,n)
{
    let mx = arr[0];
        for (let i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
}
 
// A function to do counting sort of arr[] according to
    // the digit represented by exp.
function countSort(arr,n,exp)
{
    const output = new Array(n); // output array
        let i;
        const count = new Array(10);
        for(let i=0;i<10;i++)
            count[i]=0;
  
        // Store count of occurrences in count[]
        for (i = 0; i < n; i++)
            count[Math.floor(arr[i] / exp) % 10]++;
  
        // Change count[i] so that count[i] now contains
        // actual position of this digit in output[]
        for (i = 1; i < 10; i++)
            count[i] += count[i - 1];
  
        // Build the output array
        for (i = n - 1; i >= 0; i--) {
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
        }
  
        // Copy the output array to arr[], so that arr[] now
        // contains sorted numbers according to current digit
        for (i = 0; i < n; i++)
            arr[i] = output[i];
}
 
// The main function to that sorts arr[] of size n using
    // Radix Sort
function radixsort(arr,n)
{
    // Find the maximum number to know number of digits
        const m = getMax(arr, n);
  
        // Do counting sort for every digit. Note that
        // instead of passing digit number, exp is passed.
        // exp is 10^i where i is current digit number
        for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
            countSort(arr, n, exp);
}
 
/* Driver Code */
const arr=[170, 45, 75, 90, 802, 24, 2, 66];
const n = arr.length;
 
// Function Call
radixsort(arr, n);
console.log(arr);
console.log(n)
 