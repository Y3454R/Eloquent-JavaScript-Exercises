// my solution

let flag = false, size = 8, str = "";
for(let n = 1; n <= size * size; n++) {
   
    if(flag == false) {
        if(n % 2 != 0) {
            str += " ";
        }
        else {
            str += "#";
        }
    }
    else {
        if(n % 2 == 0) {
            str += " ";
        }
        else {
            str += "#";
        }
    }

    if(n % size == 0) {
        flag = !flag;
        str += "\n";
    }

}

console.log(str);


//author's solution

/*
let size = 8;
let board = "";
for(let i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
        if((i + j) % 2 == 0) {
            board += " ";
        }
        else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);
*/
