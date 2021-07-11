// my solution

function myRange(start, end) {
    let ara = [];
    for (let i = start; i <= end; i++) {
        ara.push(i);
    }
    return ara;
}

console.log(myRange(1, 10));

function mySum(ara) {
    let sum = 0;
    for (number of ara) {
        sum += number;
    }
    return sum;
}

console.log(mySum(myRange(1, 10)));

function modifiedMyRange (start, end, step) {
    let ara = [];
    if(step == undefined) {
        for(let i = start; i <= end; i++) {
            ara.push(i);
        }
    }
    else {
        if(step >= 0) {
            for(let i = start; i <= end; i+= step) {
                ara.push(i);
            }
        }
        else {
            for(let i = start; i >= end; i+= step) {
                ara.push(i);
            }
        }
    }
    return ara;
}

console.log(modifiedMyRange(5, 2, -1));

// author's solution

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }