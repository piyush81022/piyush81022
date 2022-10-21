//const { size } = require("lodash");

class listnode{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class linkedlist{
     constructor(head){
        this.head=head

     }
      size() {
        
      
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    clear(){
        this.head=null
    }
    //insert at the given index
    insertat=function(data,index){
        let newNode=new node(data)
        let prev=this.getLast(index-1)
        newNode.next=prev.next;
        prev.next=newNode    
return this.head
    }
    deleteFnode=function(){
        this.head=this.head.next
        return this.head

    }
    deleteLnode=function(){
        let n1 =this.head
        let n2=this.head.next
        while(n2.next !==null){
        n1=n2
        n2=n2.next 
    }
    n1.next=null
    }

}

let node1=new listnode(20)
let node3=new listnode(10)
let node4=new listnode(50)

let list=new linkedlist(node1)
node1.next=node3
node3.next=node4
// lets try to access the node in the list we have created 
console.log(list.head)
console.log()
console.log(list.size())

console.log(list.clear())
console.log(list.head)
console.log(list.getLast())
list.insertat(20,3)
list.deleteLnode()
console.log(list.linkedlist())



