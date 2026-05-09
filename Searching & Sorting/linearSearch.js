const arr = [4, 5, 23, 0, 23, 2];
const target = 0;

function linearSearch(arr){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return  -1;
}

const output = linearSearch(arr);
console.log(output);