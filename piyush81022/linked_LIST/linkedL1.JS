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
list.size()



