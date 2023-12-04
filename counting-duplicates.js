// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// my solution
function duplicateCount(text) {
  const counter = {};
  let count = 0;

  let chars = text.toUpperCase().split("");

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    !counter[char] ? (counter[char] = 1) : (counter[char] = counter[char] + 1);
  }

  const counterValues = Object.values(counter);

  for (let i = 0; i < counterValues.length; i++) {
    if (counterValues[i] > 1) {
      count += 1;
    }
  }

  return count;
}

// time: O(n)
// space: O(n)

// other solutions
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
