const arr = [-5, -31, -5, -23, -56, -340, -34];

let min = Infinity; 
function findMinimumNumber(arr){
    for(let i of arr){
        if( i < min){
            min = i;
        }
    }
    return min;
}

const result = findMinimumNumber(arr);
console.log(result);