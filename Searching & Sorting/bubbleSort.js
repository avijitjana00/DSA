const arr = [5,2,0,3,1];

function bubbleSort(arr){
    const n = arr.length;
    let isSwaped = false;
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwaped = true;
            }
        }
        if(!isSwaped) {
            break;
        }
    }
    return arr;
}

const output = bubbleSort(arr);
console.log(output);