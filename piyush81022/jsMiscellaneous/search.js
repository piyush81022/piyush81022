//two method to write search pattern 
// const searchpattern=/abc/;
// const searchstring="testavbctest";
// console.log(searchpattern.test(searchstring));
// const searchpattern =new RegExp(/^a...s$/);
// // /^a starts with a ,s$ ends with s
// const searchstring ="al2is";
 
// const searchpattern =new RegExp(/[^0-9]/)
// const searchstring="&s123456"
// console.log(searchpattern.test(searchstring));
// const string='find me'
// const pattern =new RegExp/(/me/);
// const result =string.search(pattern)
// //console.log(result);
// const string1='find me';
// const string2=string1.replace(pattern,'you');
// console.log(string2)
const reg=/[\s]+/;
//const result3='hello wor ld'.split(" ");
//console.log(result3)
const string ='Hello hello hello ';
const result3=string.replace(/hello/,'world');
console.log(result3)
const result=string.replace(/hello/g,'world ');//global 
console.log(result);
const result2=string.replace(/hello/i,'world piyush ');//insensitive 
console.log(result2);
const result4=string.replace(/hello/gi,'work for');//global as well as case insensitive 
console.log(result4);






