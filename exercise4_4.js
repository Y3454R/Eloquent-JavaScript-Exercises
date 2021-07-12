// my solution

/*
arekta recursive function! yahooo!!!!
*/


function myDeepEqual(object1, object2) {

    let returnValue = true;

    if(object1 == null || object2 == null) {
        returnValue = false;
    }

    let key1 = Object.keys(object1);
    let key2 = Object.keys(object2);

    let numberOfKeys1 = key1.length;
    let numberOfKeys2 = key2.length;

    let val1 = Object.values(object1);
    let val2 = Object.values(object2);
    let numberOfValues1 = val1.length;
    let numberOfValues2 = val2.length;

    if(numberOfKeys1 != numberOfKeys2 || numberOfValues1 != numberOfValues2) {
        returnValue = false;
    }
    else {
        for(let i = 0; i < numberOfKeys1; i++) {
            if(key1[i] != key2[i]) {
                returnValue = false;
            }
        }
        for(let i = 0; i < numberOfValues1; i++) {
            if(typeof val1[i] == "object" && typeof val2[i] == "object") {
                returnValue = myDeepEqual(val1[i], val2[i]);
            }
            else if(val1[i] != val2[i]) {
                returnValue = false;
            }
        }
    }
    return returnValue;
}


// Your code here.

let obj = {here: {is: "an"}, object: 2};
console.log(myDeepEqual(obj, obj));
// → true
console.log(myDeepEqual(obj, {here: 1, object: 2}));
// → false
console.log(myDeepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


// author's solution

function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
}