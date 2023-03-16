// function f1() {
//     console.log('first function goes here');
//  }
 
//  function f2() {
//    console.log('Second function goes here');
//    f1(); // dependent on f2() means blocking
//  } 
 
//  f2();

console.log('=========before async 1');
setTimeout(()=>{
    console.log('Hi this is Async2');
},0);

console.log('========After async3');