/*
topics should be revisited:
- reduce
- map
- filter
- some
- findIndex
*/


// passing function to a function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);


// creating a function on the spot

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});

console.log(labels);

/*
to understand this example:
https://dev.to/prerana1821/reviewing-eloquent-javascript-chpt5-1egh
*/

// functions that create new functions

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// fcuntion that change other function

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3,2,1);

// new types of control flow

function unless(test, then) {
    if(!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});

// forEach
["A", "B"].forEach(l => console.log(l));


function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        //console.log(known, name, typeof name);
        if (known == -1) {
            counts.push({name, count: 1});
        }
        else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

/*
https://stackoverflow.com/questions/60378374/can-anyone-please-explain-me-the-following-function-from-eloquent-javascript
*/

/*
function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if(total == 0) return "No scipts found";

    return scripts.map(({name, count}) =>{
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}
*/