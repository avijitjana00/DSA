/**problem statement
 Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

 You must implement a solution with a linear runtime complexity and use only constant extra space.

 Input: nums = [2,2,1]

 Output: 1
 */ 

 //solution - 1;
const  nums = [4,1,2,1,2];
function singleNumber(nums){
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]) {
            obj[nums[i]] = 1;
        }else {
            obj[nums[i]]++;
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]] == 1) {
            return nums[i];
        }
    }
    
}

const output = singleNumber(nums);
console.log(output);

//solution - 2 - using XOR operator concept

function singleNumber1(nums){
    let xor = 0;
    for(let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i];
    }
    return xor;
}

const output1 = singleNumber1(nums);
console.log(output1);