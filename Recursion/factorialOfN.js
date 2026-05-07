const n = 5;

function factorial(n){
    if(n == 1) return 1;
    return n * factorial(n - 1);
}

const output = factorial(n);
console.log(output);