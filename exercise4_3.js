// my solution

function myArrToList(arr) {
    let len = arr.length;
    let obj = {};
    let tempObj = {};
    for(let i = len - 1; i >= 0; i--) {

        obj.value = arr[i];
        
        if(i == len - 1) {
            obj.rest = null;
        }
        else {
            obj.rest = tempObj;
        }

        tempObj = {value: obj.value, rest: obj.rest}
    }
    return obj;
}

console.log(myArrToList([10, 20, 30]));


/*
nije nije ekta recursive function likhe fellam!
ki je anondo lagteche! :D
*/

function myList (objPara) {
    let output = [];

    function myListToArr(objPara) {
        output.push(objPara.value);
        if(objPara.rest == null) {
            return output;
        }
        else {
            return myListToArr(objPara.rest);
        }
    }
    return myListToArr(objPara);
}



console.log(myList(myArrToList([10, 20, 30])));
console.log(myList(myArrToList([10, 20, 30, 40, 50, 60])));

function myPrepend (valPara, restPara) {
    let returnObject = {};
    returnObject.value = valPara;
    returnObject.rest = restPara;
    return returnObject;
}

console.log(myPrepend(10, myPrepend(20, null)));

/*
nije nije arekta recursive funtion likhe fellam :P :D
*/

function myNth (objPara, indx) {
    let cnt = -1;
    function r(objPara) {
        cnt++;
        if(cnt == indx) {
            return objPara.value;
        }
        else if(objPara.rest == null) {
            return undefined;
        }
        else {
            return r(objPara.rest);
        }
    }
    return r(objPara);
}

console.log(myNth(myArrToList([10, 20, 30]), 1));


// author's solution

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20