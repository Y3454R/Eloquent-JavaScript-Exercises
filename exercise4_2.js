// my solution

function myRevArray(ara) {
    let newAra = [];
    for (let i = ara.length - 1; i >= 0; i--) {
        newAra.push(ara[i]);
    }
    return newAra;
}

console.log(myRevArray(["A", "B", "C"]));

function myRevArrayInPlace(ara) {
    let i, j, len = ara.length;
    for(i = 0, j = len - 1; i < j; i++, j--) {
        [ara[i], ara[j]] = [ara[j], ara[i]];   // https://stackoverflow.com/questions/872310/javascript-swap-array-elements/872317
    }
}

let arrayValue = [1, 2, 3, 4, 5];
myRevArrayInPlace(arrayValue);
console.log(arrayValue);

// author's solution

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }