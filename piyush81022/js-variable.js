function power(num,pow){
    let sum=1
    for(let i=1;i<=pow;i++){
        sum=sum*num;
    }
    return sum
}
console.log(power(2,5))



