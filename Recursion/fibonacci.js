/**problem statement
    The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

    F(0) = 0, F(1) = 1
    F(n) = F(n - 1) + F(n - 2), for n > 1.
    Given n, calculate F(n).

    Input: n = 2
    Output: 1
    Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

 */
// solution - 1 - Iterative approach
const n = 9;

function fibonacci(n){
    let a = 0; b = 1;
    for(let i = 2; i <= n; i++){
        b = a + b;
        a = b - a;
        fib = b;
    }
    return fib;
}

const output = fibonacci(n);
console.log(output)

// solution - 1 - Recursive approach
function fibonacci1(n){
    if(n <= 1) return n;
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}

const output1 = fibonacci1(n);
console.log(output1)