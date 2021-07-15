// my solution
function myLoop(val, test, update, body) {
    while (test(val)) {
        body(val);
        val = update(val);
    }
}

myLoop(3, n => n > 0, n => n - 1, console.log);


// author's solution
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
}
