// my solution

function min(number1, number2) {
    return number1 < number2 ? number1 : number2;
}

console.log(min(0, 10));
console.log(min(0, -10))

// author's solution

function min(a, b) {
    if (a < b) return a;
    else return b;
  }