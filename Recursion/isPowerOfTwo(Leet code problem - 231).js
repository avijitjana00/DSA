const n = 16;

function isPowerOfTwo(n){
    if(n == 1) return true;
    if(n === 0) return false;

    return isPowerOfTwo(n/2);
}

const output = isPowerOfTwo(n);
console.log(output);