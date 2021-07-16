// my solution

/*
run here:
https://eloquentjavascript.net/code/#5.4
*/

/*
let str = "abir";
console.log(str.codePointAt(0));
for(let s of str) {
    console.log(s.codePointAt(0));
}
*/

function myCharDir(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script.direction;
        }
    }
    return null;
}

function myCount(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count:1});
        }
        else {
            counts[known].count++;
        }
    }
    return counts;
}


function domDir(text) {
    let dirs = myCount(text, char => {
        return myCharDir(char.codePointAt(0));
    }).filter(({name}) => name != null);
    let dominent, dominentCount = -Infinity;
    for (let dir of dirs) {
        if (dir.count > dominentCount) {
            dominent = dir.name;
            dominentCount = dir.count;
        }
    }

    // let dominent = dirs.reduce((a,b) => {return a.count > b.count ? a.name : b.name}); // tried but failed for 1 member
    // let dominent = dirs.reduce((a,b) => a.count > b.count ? a : b).name; // works
    return dominent;
}

console.log(domDir("Hello!"));
// → ltr
console.log(domDir("Hey, مساء الخير"));
// → rtl

// author's solution
function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
