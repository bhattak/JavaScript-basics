let arr = [0, 0, 1, 1, 1, 1, 1,0, 0, 0, 1, 0, 0, 1, 1, 1, 0];

function findLCS(arr) {
  let count = 0;
  let lengthLS = 0;
  for (i of arr) {
    if (i == 0) count = 0;
    else {
      count++;
      lengthLS = Math.max(count, lengthLS);
    }
  }
  return lengthLS;
}

console.log(findLCS(arr));
