// Define f to hold a function value
const f = function(a) {
    console.log(a + 2);
};
  
  // Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}
  
// A less verbose function value
let h = a => a % 3;

const square1 = (x) => { return x * x; };

const square2 = x => x * x;

const horn = () => {
    console.log("Toot");
  };


// optional arguments

function minus(a,b) {
    if(b == undefined) return -a;
    else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));

function power(base, exp = 2) {
    let res = 1;
    for(let i = 0; i < exp; i++) {
        res*= base;
    }
    return res;
}

console.log(power(4));
console.log(power(2,10));

// closure

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

// Recursion

function pow(b, e) {
    if(e == 0) {
        return 1;
    }
    else {
        return b * pow(b, e - 1);
    }
}

console.log(pow(2, 3));



/*
puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced.
How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?
*/


function findSolution(target) {

    function find(val, str) {
        if(target == val) {
            return str;
        }
        else if(val > target) {
            return null;
        }
        else {
            return (find(val + 5, `${str} + 5`) ||   // ${str} keeps the previous string "str + 5" would print just "str + 5"
                    find(val * 3, `${str} * 3`));
        }
    }

    return find(1, "1");
}


console.log(findSolution(13))
console.log(findSolution(15))


// Growing functions

function printFarmInventory (cows, chickens) {
    let cowStr = String(cows);
    while(cowStr.length < 3) {
        cowStr = "0" + cowStr;
    }
    console.log(`${cowStr} Cows`);
    let chickenStr = String(chickens);
    while(chickenStr.length < 3) {
        chickenStr = "0" + chickenStr;
    }
    console.log(`${chickenStr} Chickens`);
}

printFarmInventory(7, 11);

function printZeroPaddedWithLabel(number, label) {
    let numStr = String(number);
    while(numStr.length < 3) {
        numStr = "0" + numStr;
    }
    console.log(`${numStr} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory2(7, 11, 13);


function zeroPad(number, width) {
    let str = String(number);
    while(str.length < width) {
        str = "0" + str;
    }
    return str;
}

function printFarmInventory3(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory3(7, 16, 3);