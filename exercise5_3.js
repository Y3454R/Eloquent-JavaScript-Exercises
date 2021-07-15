// my solution
console.log("with loop:")
function myEvery1(array, test) {
    for (let element of array) {
        if (!test(element))
            return false;
    }
    return true;
}
  
console.log(myEvery1([1, 3, 5], n => n < 10));
// → true
console.log(myEvery1([2, 4, 16], n => n < 10));
// → false
console.log(myEvery1([], n => n < 10));
// → true
console.log("with some method:");
function myEvery2(array, test) {
    let oppositeTest = (element) => test(element) == false;
    if (array.some(oppositeTest) == false) {
        return true;
    }
    else
        return false;
}
  
console.log(myEvery2([1, 3, 5], n => n < 10));
// → true
console.log(myEvery2([2, 4, 16], n => n < 10));
// → false
console.log(myEvery2([], n => n < 10));
// → true


// author's solution
function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
}
  
function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}