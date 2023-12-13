'use strict';

const a = {
  name: 'a',
};

const b = a;
b.name = 'c';

console.log(a);
console.log(b);

//copying object

const x = {
  name: 'x',
  ara: [1, 2, 3], // Need deep clone for object inside object
};
const y = Object.assign({}, x);

y.name = 'y';
y.ara.push(4);

console.log(x);
console.log(y);
