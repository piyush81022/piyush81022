//let strings = ["avengers","captain america","ironman","black panther"];
//let newarr=[]
//   for(let i=0;i<strings.length; i++){
//    let  y=newarr.push(strings[i].toUpperCase())
// console.log(y)
// }
// console.log()
// y=strings.toString()
// let x=y.toUpperCase()
// console.log(x.slice(" ").join('"'))
// //let strings = ["avengers", "captain america", "ironman", "black panther"];
// console.log(strings.map(string => string.toUpperCase()));
// const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const result=inputWords.filter(word=>word.length>6)
// console.log(result)

// const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const longWords = inputWords.filter(word => word.length > 6);
// console.log(longWords);
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(`"${result}"`);
// let a=-10,b=-1,c=3
// if(a>b && a>c){
//     if(b>c){
//         console.log(a,b,c)
//     }
//     else{ console.log(a,c,b)}
// }
// else if(b>a && b>c){
//     if(a>c){
//         console.log(b,a,c)
//     }
//     else { console.log(b,c,a)}

// }
// else if(c>a && c>b){
//      if(a>b){
//         console.log(c,a,b)
//      }    
//      else { console.log(c,b,a)}
// }
// else {
//     console.log("all number are equal " ,a,b,c)
// }
// Function amountTOcoin(amount,coin){
//        if(amount===0){
//         reutrn [];

//        }
//        else {
//         if(amount>=coin[0]){
//             left=amount-coin[0]
//             return [coin[0]].concat(amountTOcoin(left,coin))
//         }
//         else {
//             coin.shift();
//             return amountTOcoin(amount,coin)
//         }
//        }  
              
// }
// let coin =[25,10,5,2,1]
// amountTOcoin(46,coin)
function substring(str1){
    var  array=[]
    for(var x=0,y=1;x<str1.length;x++,y++){
        array[x]=str1.substring(x,y)

    }
    var combi=[]
    var temp= " "
    var slent=Math.pow(2,array.length)
    for(var i=0; i<slent;i++){
        temp =""
        for(var j=0; j<array.length;j++){
            if((i & Math.pow(2,j))){
                temp+=array[j]
            }
        }
        if(temp !==""){
            combi.push(temp)

        }

    }
    console.log(combi.join("\n"))
}
substring("dog")
let possibleCombinations = (str) =>{
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
}
console.log(possibleCombinations('Dogp'));






