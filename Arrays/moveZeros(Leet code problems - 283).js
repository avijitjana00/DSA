/**problem statement   
    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.
 */

//solution - 1
let nums = [0,1,0,3,12,0,0,23];

let zeros = 0;
let arr = [];

for(let i of nums){
    i === 0 ? zeros++ : arr.push(i);
}

while(zeros--){
    arr.push(0);
}
console.log(arr);

//solution - 2 - without creating new array
function shiftZeros(nums){
    let x = 0;
    let zeros = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[x] = nums[i];
            x = x + 1;
            nums[i] = 0;
        }
    }
    return nums;
}

const output = shiftZeros(nums);
console.log(output);