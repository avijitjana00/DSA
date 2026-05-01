const n = 5;

function patterns(n){
    for(let i = 0; i < n; i++){
        let row = "";
        for(let j = 0; j < n - (i + 1); j++){
            row = row + " ";
        }
        for(let k = 0; k <= i; k++){
            row = row  + "*";
        }
        console.log(row)
    }
}

patterns(n);