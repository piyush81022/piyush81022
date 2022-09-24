// SuperType constructor function
// function SuperType() {
//     this.name = "John"
//     }
//     //SuperType prototype
//     SuperType.prototype.getSuperName = function(){
//     return this.name
//     }
//     //SubType prototype function
//     function SubType(){
//     this.age = 26
//     }
//     //Inherit the properties from SuperType
//     SubType.prototype = new SuperType();
//     // Add new property to SubType prototype
//     SubType.prototype.getSubAge = function(){
//     return this.age;
//     }
//     //Create a SubType object
//     var subTypeObj = new SubType();
//     console.log(subTypeObj.name); //Output: John
//     console.log(subTypeObj.age); //Output: 26
//     console.log(subTypeObj.getSuperName()); //Output: John
//     console.log(subTypeObj.getSubAge()); //Output: 26
 class car {
    constructor(brand ){
        this.carname=brand;
    }
    present(){
        return 'i have a'+this.carname;

    }
 }   
 class Model extends car{
    constructor(brand,mod){
        super(brand);
        this.model=mod
    }
    show(){
        return this.present+ 'it is a '+this.model;
    }

 }
 mycar= new Model ("fordd","mustang ")
 console.log(mycar)
 //document.getElementById("demo").innerHTML=mycar.show()
 


