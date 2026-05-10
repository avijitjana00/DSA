/**
    Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

    You must write an algorithm with O(log n) runtime complexity.

    Input: nums = [-1,0,3,5,9,12], target = 9
    Output: 4
    Explanation: 9 exists in nums and its index is 4
 */

const nums = [-1,0,3,5,9,12], target = 9

function binarySearch(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while( right > left){ 
        let middle = Math.floor((left + right) / 2);
        
        if(target === nums[middle]){ 
            return middle;
        } else if(target < nums[middle]){ 
            right = middle - 1;
        } else { // 9 > 3
            left = middle + 1;
        }
    } 
    return -1; // => if target elemnt not found
}

const output = binarySearch(nums, target);
console.log(output);