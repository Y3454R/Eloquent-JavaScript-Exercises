// my solution

/*
function myCountBs(str) {
    let cnt = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == "B") {
            cnt++;
        }
    }
    return cnt;
}

console.log(myCountBs("BBC"));
*/

function myCountChar(str, ch) {
    let cnt = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == ch) {
            cnt++;
        }
    }
    return cnt;
}

console.log(myCountChar("kakkerlak", "k"));

function myCountBs(str) {
    return myCountChar(str, "B");
}

console.log(myCountBs("BBC"));

// author's solution

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
}
  
function countBs(string) {
    return countChar(string, "B");
}