// class queue{
//     constructor(){
// this.item=[]
// }
// enqueue(ele){
//     this.item.push(ele);

const { isEmpty } = require("lodash")

// }
// dequeue(ele){
//     if(this.item.length>0){
        
//     }
//     this.item.shift();
// }

// }
// let q= new queue();
// q.enqueue(5)
// q.enqueue(6)
// q.enqueue(40)
// q.enqueue(56)
// console.log(q.item)
// q.dequeue()
// console.log(q.item)
// q.dequeue()
// console.log(q.item)
class Node{
    constructor(value){
        this.value=value 
        this.next=null
    }
}
class queue{
    constructor(){
        // link to the first node in queuq
    
        this.head=head
        // link to the last node in queue 
        this.tail=tail 
        // the number of nodes in queue
        this.length=0
    }
}
enqueue(value){
    const node=new Node(value);
    if(this.head){
        this.tail.next=node;//insert the created node after the tail of our queue

        this.tail=node// now the created node is the last node 

    }
    else{
        //if there is no node in the queue
        this.head=node//the created node is a head
        this.tail=node;//also the created node is a tail in queue because it is single


    }
    this.length++;// increase the length of queue by 1
}
dequeue(){
    const current=this.head 
    this.head=this.head.next;//move the head link to the second node in the queue
    this.length--
    return current.value;
}
print(){
    let current=this.head;
    while(current){
        console.log(current.value)//print the value of the node in console
        current=current.next// move link to the next node after head

    }
}


//Auxiliary methods  (1) isEmpty (2)gerHead  (3)getLength
isEmpty(){
    return this.length===0// this method simply cheaks there are node in our queue or not 
    // it return true if theere is at least one node in queue and false if there are no node

}
getHead(){
     return this.head.value;// this method return the first node in the queue

       
}
getLength(){
    return this.length;// it return the number of node in our queue
    

}

