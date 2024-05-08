// function squareOfInput(input) {
//   return input * input;
// }

// function sumofSquareOfInput(val1, val2) {
//   const oneVal = squareOfInput(val1);
//   const twoVal = squareOfInput(val2);

//   return oneVal + twoVal;
// }
// console.log(sumofSquareOfInput(10, 20));

// main callback function example

  // function square(input) {
//   return input * input;
// }

// function cube(input) {
//   return input * input * input;
// }

// function fourtPower(input) {
//   return input * input * input * input;
// }
// function sumOfAnything(a, b, callback) {
//   const val1 = callback(a);
//   const val2 = callback(b);

//   return val1 + val2;
// }

// let sqr = sumOfAnything(1, 2, square);
// console.log(sqr);

// let cb = sumOfAnything(3, 3, cube);
// console.log(cb);

// let fp = sumOfAnything(1, 2, fourtPower);
// console.log(fp);


//  problem is to write code which contains method like loops, functions and callbacks functions

let array = [];

  function squareArray(array){
    let newArray = [];
    for(let i=0; i<array.length; i++){
      newArray.push(array[i] * array[i]);
    }
    return newArray;
  }


function performOperation(array, squareArray, callback){
  let result = squareArray(array);

  callback(result);
}

function logArray(array){
console.log(array)
}

performOperation([2,45,7], squareArray, logArray)
