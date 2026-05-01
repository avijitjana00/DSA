const n = 5674;

function countDigit(n){
    if(n === 0) return 1;

    n = Math.abs(n); // converting negetive number to positive number

    let count = 0;
    while(n > 0){
        n = Math.floor(n/10); //Math.floor used for only take interger =>Math.floor(10.9) => 10
        count++;
    }
    return count;
}

const result = countDigit(n);
console.log(result);

/**
 * corner cases =>
 * number can be a negetive 
 * number can be a 0 => return 1
 */