// how we check the variables are undefined or null?

let x  = null;

// Type 1
if(x === undefined) {
    console.log(x+" is not defind");
}


// Type 2
const person = {
    fname:"ghan"
};

if(typeof person.age === 'undefined') {
    console.log(" age is not defind");
}



// Nullish operator  // Type 3

const personNullish = {
fname:'ghan'
};

person.age ??= 20;
console.log(personNullish.age); // 20