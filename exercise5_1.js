// my solution
let ara = [[1, 2, 3], [4, 5], [6], 8];
console.log( ara.reduce((a, b) => a.concat(b)) );

//author's solution
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));