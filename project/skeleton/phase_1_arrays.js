// Array.prototype.uniq = function(){
//     const newArr = [];
//     for(let i=0; i < this.length; i++){
//         if (!newArr.includes(this[i])){
//                 newArr.push(this[i])
//         }
//     }
//     return newArr
// }

//because we are too cool
Array.prototype.uniq = function () {
  return [...new Set(this)];
};
// let arr=[1,2,3,3,3,3,3,3,2,2,2,22,2,]
console.log(arr.uniq());

Array.prototype.twoSum = function () {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] + this[i] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

let arr2 = [1, -1, 2, 3, 5, -5];
console.log(arr2.twoSum());

Array.prototype.transpose = function () {
  const newArr = [];
  let length = this.length;
  let col = this[0].length;
  for (let i = 0; i < length; i++) {
    let newArr2 = [];
    for (let j = 0; j < col; j++) {
      newArr2.push([this[j][i]]);
    }
    newArr.push(newArr2);
  }
  return newArr;
};

let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(nestedArray.transpose());
