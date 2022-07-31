var nums = [];

for (i = 0; i < 5; i++) {
  nums[i] = +prompt(`Enter number ${i + 1}`);
}

function sorter(nums) {
  let sorted = nums.sort(function (a, b) {
    return a - b;
  });

  alert(`The second lowest number is: ${sorted[1]}`);
  alert(`The second greatest number is: ${sorted[sorted.length - 2]}`);
}
sorter(nums);