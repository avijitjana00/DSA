const arr = [-5, -31, -5, -23, -56, -34, -34];

let max = -Infinity;
function findLargestNumber(){
    for(let i of arr){
        if(i > max){
            max = i;
        }
    }
    return max;
}

const result = findLargestNumber(arr);
console.log(result);