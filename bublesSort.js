function bublesSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j + 1] < arr[j]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

const numbers = [29, 10, 14, 37, 14, 30, 3, 27, 42];

console.log(bublesSort(numbers));