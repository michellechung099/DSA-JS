// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// my solution
function descendingOrder(n) {
  return JSON.parse(
    JSON.stringify(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// parseInt, String, reverse, sort
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
