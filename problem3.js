let arr = [0, 1, 2, 3, 4, 5, 6, 7];
for (let i = 7; i <= 100; i++) {
  arr.push(i);
}

function findDuplicate(arr) {
  const lastNum = arr[arr.length - 1];
  const expectedSum = (lastNum * (lastNum + 1)) / 2;
  const actualSum = arr.reduce((a, r) => {
    return a + r;
  });
  return actualSum - expectedSum;
}
let redndantNumber = findDuplicate(arr);
console.log(`Duplicate number is: ${redndantNumber}`);
