let arr = [5,4,3,5,1];

let length = arr.length - 1;;
function sum(length){
    if(length === 0) return arr[0];
    return arr[length] + sum(length - 1);
}

const output = sum(length);
console.log(output);