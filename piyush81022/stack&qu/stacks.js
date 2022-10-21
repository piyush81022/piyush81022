// class Stack{
//     constructor(){
//         this.item=[]
//     }
//     add(element){
//         this.item.push(element)
//     }
//     remove(){
//         if(this.item.length>0){
//             this.item.pop();
//         }
//         else{
//             console.log('empty  stack')
//         }
//     }
//         peek(){
//             let topindex=this.item.length-1
//             let topelement=this.item[topindex]
//             return topelement
//         }
//     }

//  let stack=new Stack();
// stack.add(5)
// stack.add(6)
// stack.add(8)
// stack.add(81)
// stack.add(83)
// console.log(stack.item)
// stack.remove()
// console.log(stack.item)
// console.log(stack.peek())
function sortstack(){
    let tempStack=[]
    while(input.length>0){
        let temp=input.pop()
        while(tempStack>0&&tempStack[tempStack.length-1]>temp){
        input.push(tempStack[tempStack.length-1])
        tempStack.pop()
        } 
        tempStack.push(temp)
    }
   return tempStack
}
const input = [98, 88, 3, 69, 55]
sortstack(input)



