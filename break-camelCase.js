// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// my solution
function solution(string) {
  let newString = [];
  let chars = string.split("");

  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    if (char === char.toUpperCase() && char !== char.toLowerCase() && i !== 0) {
      newString.push(" ");
      newString.push(char);
    } else {
      newString.push(char);
    }
  }

  return newString.join("");
}

// other solutions
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}
