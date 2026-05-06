const n = 10;

function recursive(n){
    if(n === 0) return ;
    console.log(n);
    n = n - 1;
    recursive(n);
}

recursive(n);