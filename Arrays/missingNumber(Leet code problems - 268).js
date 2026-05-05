/**
 Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 Input: nums = [3,0,1]

 Output: 2
 */

 const nums = [9,6,4,2,3,5,7,0,1]

 function missingNumber(nums){
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    const expectedSum = ((max - min + 1) * (max + min)) /2;
    const actualSum = nums.reduce((acc, curr)=> acc + curr, 0);
    return expectedSum - actualSum;
 }

 const output = missingNumber(nums);
 console.log(output);