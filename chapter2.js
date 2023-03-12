// let , const, var 

// 1. let values are block scoped
// 2. let values can be redefind but can't redeclare


// const 
// 1. const values are block scoped
// 2. const values can not be redefind or redeclare

// var

// var has no block scope within brackets 
// var has functional scope.

// var a = 10;
// function display() {
//     var a = 30;
// }
// display();

// console.log(a);

// Fat arrow functions

// const display = (x,y) => x+y;
// console.log(display());


// const person = {
//     name: 'ghan',
//     language: ['english', 'hindi', 'french', 'american'],
//     display: function() {
//         // console.log('Inside method');
//         // var that = this;
//         console.log(this.name);
//         this.language.forEach((res) => {
//             console.log(this.language);
//             // console.log(res);
//         });
        
//     }
// }

// person.display();
