const n = 5;
function patterns(n){
    for(let i = 1; i <= n; i++){
        let row = "";
        for(let j = 0; j < i; j++){
            row = row + " " +(i);
        }
        console.log(row);
    }
}

 patterns(n);