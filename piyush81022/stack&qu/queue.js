class queue{
    constructor(){
this.item=[]
}
enqueue(ele){
    this.item.push(ele);

}
dequeue(ele){
    if(this.item.length>0){
        
    }
    this.item.shift();
}

}
let q= new queue();
q.enqueue(5)
q.enqueue(6)
q.enqueue(40)
q.enqueue(56)
console.log(q.item)
q.dequeue()
console.log(q.item)
q.dequeue()
console.log(q.item)
