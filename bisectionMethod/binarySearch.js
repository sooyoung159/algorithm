// 10
// 6 3 2 10 10 10 -10 -10 7 3
// 8
// 10 9 -5 2 3 4 5 -10

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = +input[0].split(' ');
let nArr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const m = +input[2].split(' ');
let mArr = input[3].split(' ').map(Number);

const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
};

const upperBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
};

const countByRange = (arr, leftValue, RightValue) => {
  const rightIndex = lowerBound(arr, RightValue, 0, arr.length);
  const leftIndex = upperBound(arr, leftValue, 0, arr.length);

  return rightIndex - leftIndex;
};

let answer = '';

for (let i = 0; i < mArr.length; i++) {
  let cnt = countByRange(nArr, mArr[i], mArr[i]);
  answer += cnt + ' ';
}

console.log(answer);
