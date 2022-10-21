class Node{
  constructor(data){
    this.data=data
    this.next=null 
  }  
}
class linklist{
    constructor(head=null) {
        this.head=head

insertAt(element,index){
  if(index<0 || index>this.size){
    return console.log("please enter the valid index")
  }
  else {
    var node=new Node(element)
    var curr,prev;
    curr=this.head;
    if(index==0){
      node.next=this.head;
      this.head=node;
      return console.log(this.head)
    }
     else { curr=this.head;
            var it=0;
            while(it<index){
              it++
              prev =curr;
              curr=curr.next 
              
            }
            node.next=curr;
            prev.next=node;

    }
      this.size++;
  }
}

    }
}

let node1 = new Node(50)
let node2 = new Node(60)
let node3 = new Node(30)
let node4 = new Node(20)
let node5 = new Node(45)
let node6 = new Node(300)

node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5
node5.next=node6
node6.next=null


let newnode=new Node(99)
newnode.next =this.head

this.head=newnode

let list=new linklist(node1)
//console.log(list.node1) 
//list.Nod
console.log(this.head)
console.log(list.insertAt)







