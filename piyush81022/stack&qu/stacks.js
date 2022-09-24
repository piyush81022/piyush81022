class Stack{
    constructor(){
        this.item=[]
    }
    add(element){
        this.item.push(element)
    }
    remove(){
        if(this.item.length>0){
            this.item.pop();
        }
        else{
            console.log('empty  stack')
        }
        peek(){
            let topindex=this.item.length-1;
            let topelement=this.item.length[]
        }
    }
}
 let stack=new Stack();
stack.add(5)
stack.add(6)
stack.add(8)
stack.add(8)
stack.add(8)
console.log(stack.item)
stack.remove()
console.log(stack.item)