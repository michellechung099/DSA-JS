// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// my solution
function getCount(str) {
  const chars = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of chars) {
    vowels.includes(char) ? (count += 1) : null;
  }

  return count;
}

// other solutions
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}
