const arr = [5,4,3,5,1,3];

const length = arr.length - 1;
function sumOdd(length){
     if (length < 0) {
        return 0;
    }
    if(arr[length] % 2 !== 0){
        return arr[length] + sumOdd(length - 1);
    }else{
       return sumOdd(length - 1);
    }
}

const output = sumOdd(length);
console.log(output);