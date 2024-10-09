function quickSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const leftArr = [];
    const rightArr = [];

    for(let i = 0; i < arr.length; i ++){
        if (arr[i] > pivot){
            rightArr.push(arr[i]);
        } else if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}


const array = [34, 7, 23, 32, 5, 62, 32, 87, 45, 21];

console.log(quickSort(array))