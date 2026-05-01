x = 121;

function isPalindrome(x) {
    if( x < 0) return false;
    const copy = x;
    let reverse = 0;
    let rem;
    if(x === 0) return 1;
    while(x>0){
        rem = x % 10;
        reverse = (reverse * 10) + rem;
        x = Math.floor(x/10);
    }
    return reverse === copy;                            
};

const result = isPalindrome(x);
console.log(result);