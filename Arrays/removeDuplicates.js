/**problem statement
    Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

    Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

    The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
 * 
 */



const input1 = [1,1,2]
const input2 = [0,0,1,1,1,2,2,3,3,4]

function removeDuplicate(input1){
    let x = 0;
    for(let i = 0; i<input1.length; i++){
        if(input1[i] > input1[x]){
            x = x + 1;
            input1[x] = input1[i]
        }
    }
    return x+1;
}

const result = removeDuplicate(input1);
console.log(result);
