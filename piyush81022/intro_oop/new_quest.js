class sem6{
    constructor(mid1,mid2){
        this.midsem=mid1;
        this.midsem2=mid2;
         }
         present(){
            return this.mid1+this.mid2;
         }

}
class end extends sem6{
    constructor(mid1,mid2,endsem){
        super(mid1,mid2);
        this.endsem=endsem;


    }
    show(){return this.present + this.end }
}
mark=new end("20","0","50")
let add=mid1+mid2+endsem
console.log(mark)
