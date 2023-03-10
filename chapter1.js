// how we evaluate the variables are undefined or null?

let x  = null;

if(x === undefined) {
    console.log(x+" is not defind");
}

const person = {
    fname:"ghan"
};

if(typeof person.age === 'undefined') {
    console.log(" age is not defind");
}
// console.log(x);