class node{
    constructor(data){
        this.data=data;
        this.next=null;

    }
}
class linkedlist{
    constructor(head){
        this.head=head;
    }
    printlinkedL= function(){
        let currentnode=this.head
        while(currentnode!==null){
            console.log(currentnode.data)
            currentnode=currentnode.next;
            
        }
        

    }
    size =function(){
        let count =0;
        let currentnode=this.head;
        while(currentnode!==null){
            count++
            currentnode=currentnode.next;
        }
      console.log("the size of the linked list ",count)  
    }
    getfirst=function(){
        return this.head
    }
    getlast=function(){
        let tempNode=this.head
        while(tempNode!==null){
            tempNode=tempNode.next;
        }
        return tempNode;
    }
    getAt =function(index){
        let counter=0
        let temp=this.head;
        while(temp){
            if(counter==index){
                return temp
            }
            else {
                temp=temp.next
                counter++
            }
        }
        return null
    }
    insertAtB=Function(data){
        let newNod=new node(data)
        newNod.next=this.head
        this.head=newNod
        return this.head;
    }
}

let node1=new node(23)//this is individual linked list ///
let node2=new node(24)
let node3=new node(69)
let node4=new node(88)
node1.next=node2
node2.next=node3
node3.next=node4

let list=new linkedlist(node1)
let resNode=list.getAt(3)
console.log(resNode.data)
list.printlinkedL()
list.size()
list.getfirst()
console.log(list.getlast())
list.insertAtB(98)
list.printlinkedL()






