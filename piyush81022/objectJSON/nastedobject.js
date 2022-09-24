let person ={first:'piyush ',lastname:'ranjan',marks:{ chemistry:40,
physics:96,math:60},fullname:function add(a,b){
    //console.log(a+b)
    return a+b
},
fname:function fname(){return this.first+ this.lastname}

};
console.log(person);
console.log(person["marks"]);
console.log(person.marks.physics)
console.log(person["marks"]["physics"]);
console.log(person.fullname(1000,300));//1300 undefined region is 
console.log(person.fname());




