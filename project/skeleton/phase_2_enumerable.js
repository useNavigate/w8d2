Array.prototype.myEach = function (function2) {
  // let result = [];
  for (let i = 0; i < this.length; i++) {
    // result.push(function2(this[i]));
    function2(this[i]);
  }
  // return result;
};

let arr = [1, 2, 3];

const numPlusOne = (num) => num + 1;

console.log(arr.myEach((el) => numPlusOne(el)));

Array.prototype.myMap = function (function2) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(function2(this[i]));
  }
  return result;
};

Array.prototype.reduce = function (function2, acc) {
  if (!acc) {
    acc = this[0];
    for (let i = 1; i < this.length; i++) {
      acc += function2(this[i]);
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      acc += function2(this[i]);
    }
  }
  return acc;
};

console.log(arr.reduce(numPlusOne, 25));
