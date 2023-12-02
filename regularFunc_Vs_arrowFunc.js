'use strict';

// this in functions
const jonas = {
  firstName: 'Jonas',
  year: 1991,

  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      //   console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
};

jonas.calcAge();

// arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
console.log(addExpr(1, 2, 3, 4)); // 3

const arrowExpr = (a, b) => {
  //   console.log(arguments); // error
  return a + b;
};
console.log(arrowExpr(2, 3));
