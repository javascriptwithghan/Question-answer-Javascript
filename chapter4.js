// let a = 10;

// {
// // TDZ intialized
// // TDZ cont...
// console.log(somevalue);// // TDZ cont...
// let somevalue = 100; // // TDZ ends
// // No TDZ
// }


// var sideEffect = 110;

// function sideEffectFun(number) {  // Impure function
// //    return sideEffect+=number;  // sideEffect= sideEffect + number
//    console.log();
// }

// console.log(sideEffectFun(20));

const sum = function(n1,n2) {  // Pure function
    return n1+n2;
}

console.log(sum(4,3));