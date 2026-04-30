const arr = [28, -1, 29, 33, 5, 31, 33];
const arr2 = [34];
const arr3 = 34;

let firstLargest = -Infinity;
let secondLargest = -Infinity;

function findSecondLargest(arr){
    if(arr.length === 0 || arr.length === 1) return [];
    if(!Array.isArray(arr)) return false;
    for(let i of arr){
        let num = i;
        if(i > firstLargest){
            secondLargest = firstLargest;
            firstLargest = num;
        }else if(num > secondLargest && num !== firstLargest){
            secondLargest = num;
        }
    }
    return {firstLargest, secondLargest};
}

const result = findSecondLargest(arr);
console.log(result);