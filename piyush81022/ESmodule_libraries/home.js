// const f=require('./contact')
// f.contact("piyush",23)
// f.add(50,60)
//;
// export const name="piyush ranjan"
// export function sum(x,y){
//     return x+y;
// }
// var _ = require('lodash');
// var numbers = [1, 2, 3, 4];
// var listOfNumbers = '';
// _.each(numbers, function(x) { listOfNumbers += x + ' ' });

const { result } = require("lodash");

// const { DateTime } = require("luxon");

// console.log(listOfNumbers);
// const { forEach } = require("lodash");
// const {DateTime }=require("luxon")
// let D=DateTime.now().toLocaleString()
// var dt = DateTime.now();
// dt.plus({ hours: 3, minutes: 2 });
// dt.minus({ days: 7 });
// dt.startOf('day');
// dt.endOf('hour');
// //console.log(D)
// console.log(dt) //\D(\d{3})-(\d{4})/g;
//const regex = new RegExp(/^a...s$/);
// const regex=/^a...s$/
// console.log(regex.test('alias')); // true
// const string="Find   me  "
// const pattern =/me/
// //const result=string.search(pattern)
// let u=string.replace(pattern,"piyush ranjan")
// //let regex= /[\S ,]+/
// const result="my name is hola ".split(" ")
// //searching the phone Number
// const regex2 = /(\d{3})/ 
// const result3 = regex2.exec('My phone number is: 555 123-4567.');
// console.log(result3); // ["555 123-4567", "555", "123", "4567"
// console.log(string)
// console.log(u)
// console.log(result)
//QUESTION NO 1

// function  is_alphaNumeric(str){
//     let regex=/^[0-9A-Za-z]+$/
//     let result =regex.test(str)
//     console.log(result)
// }
// is_alphaNumeric("37828sad");
 let  s="this is a great code with harry and also harry bhai"
//RegExp=/^this/g;
//RegExp=/bhai$/
RegExp = /(a|e|i|o|u)/g // match any one character 
//RegExp=/harryi?/ //after character means that character is optional

// let result =reg.exec(s)
// console.log(result)
// result = reg.exec(s)
// console.log(result)
// result = reg.exec(s)
// console.log(result)
let result3=s.match(RegExp)
// let result4=s.search(reg)

// if(RgExp.test(s)){
//     console.log("true its match")
// }
// else {
//     console.log("its not a match ")e
// }
// console.log(result4)
console.log(result3.length)
// function is_hexcolor(str){
//     ///regex=/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
//   regexp=/[A-Z]/;
//    let  result= regexp.test(str)
//     //let result=regex.test(str)
//     if(result){
//         console.log(true)
//     }
//     else {
//         console.log(false)
//     }
//    // console.log(result)
// }
// is_hexcolor("asdDcf")

























