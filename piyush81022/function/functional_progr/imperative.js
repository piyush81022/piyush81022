const number=[1,2,5,6,9]
const doublenum=(number)=>{
    const double=[]
    for(let i=0; i<number.length;i++){
    double.push(number[i]*2)
    console.log(double);
}
return double;
}
doublenum(number)
