/**problem statement
    Given a binary array nums, return the maximum number of consecutive 1's in the array.
Input: nums = [1,1,0,1,1,1]
Output: 3
 */


const nums = [1,1,0,1,1,1];

function consecutiveOnes(nums){
    let currentCount = 0, maxCount = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            currentCount = currentCount + 1;

        } else{
            if(currentCount > maxCount){
                maxCount = currentCount;
                currentCount = 0;
            }
        }
    }return currentCount > maxCount ? currentCount : maxCount;
}

const output = consecutiveOnes(nums);
console.log(output);