/*function fc(name){
    console.log(`hello ${name}`);

}
fc("david")
var displayName=fc;
displayName("carter");
function add(x,y){
    return x+y

}
var a=add(5,6)*/
function speak(string){
    console.log(string);

}
speak("hello");
var talk= speak;
talk("hi")
function functionReturner(fn){
    return fn;

}
var chat=functionReturner(talk);
chat("good morning");
let testarr=[chat ] //we can put many numberr of function
testarr[0]("hello world");
let obj ={
    name:chat("this is object ")
}
