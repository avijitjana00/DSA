const n = 10;

function sum(n){
    if(n === 0) return 0;
    return n + sum(n - 1);
}

const output = sum(n);
console.log(output)