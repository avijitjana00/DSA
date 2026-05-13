const arr = [7, 1, 5, 4, 3, 2];

function selectionSort(arr){
    const n = arr.length;
    for( let i = 0; i < n - 1; i++){
        let min = i;
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        //swap if min not equal to 
        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp; 
        }
    }
    return arr;
}

const output = selectionSort(arr);
console.log(output);