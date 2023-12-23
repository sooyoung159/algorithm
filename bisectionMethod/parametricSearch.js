// 4
// 120 110 140 150
// 485

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const m = +input[0];
const arr = input[1].split(' ').map(Number);
let n = +input[2];

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let total = 0;
  for (let x of arr) {
    total += Math.min(x, start);
  }

  if (total <= n) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
