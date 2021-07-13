
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"], // still work even if the comma is not given in the end
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
  };
  console.log(descriptions["touched tree"]);

  let anObj = {
      left: 1,
      right: 2,
  };

  console.log(anObj.left);
  delete anObj.left;
  console.log(anObj.left);
  console.log("left" in anObj);
  console.log("right" in anObj);

  //array of objects

  let journal1 = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"],
        squirrel: false,
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirrel: false,
    },
    {
        events: ["weekend", "cycling", "break", "peanuts", "beer"],
        squirrel: true,
    }
  ]


let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);
console.log(object1 === object2);

object1.value = 15;
console.log(object2.value);
console.log(object1 === object2);

console.log(typeof object2);


const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
// score = {visitors: 1, home: 1};


let journal = [];

function addEntry (events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal);


function max(...numbers) {
    let res = -Infinity;
    for (let number of numbers) {
        if (number > res) {
            res = number;
        }
    }
    return res;
}

console.log(max(88, 323, 33, -343));

let numArray = [5, 1, 7];
console.log(max(9, ...numArray, 2))


//Json

let string = JSON.stringify({squirrel: false, events: ["weekend"]});
console.log(string);
console.log(JSON.parse(string).events);

//Object keys and values

let obj = {here: {is: "an"}, object: 2};
console.log(Object.keys(obj));
for (let key of Object.keys(obj)) {
    console.log(key);
    if(typeof key == "object") {
        console.log("\nhello here1\n");
    }
}
for (let val of Object.values(obj)) {
    console.log(val);
    if(typeof val == "object") {
        console.log("\nhello here2\n");
    }
}

