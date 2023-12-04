// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// my solution
function findOdd(A) {
  // need to count how many times each number occurs
  // if the count value is odd, return that number

  const counter = {};

  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    !counter[num] ? (counter[num] = 1) : (counter[num] = counter[num] + 1);
  }

  for (let num in counter) {
    if (counter[num] % 2 === 1) {
      return Number(num);
    }
  }
}

// time: O(n)
// space: O(n)

// other solutions
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}

function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}
