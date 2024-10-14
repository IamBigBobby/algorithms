function mergeSort(arr){
    if (arr.length <= 1){
        return arr
    }

    const leftArr = mergeSort(arr.slice(0, Math.floor(arr.length / 2)))
    const rightArr = mergeSort(arr.slice(Math.floor(arr.length / 2)));
    
    return merge(leftArr, rightArr);
}



function merge(leftArr, rightArr) {
    const sortedArray = [];

    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArray.push(leftArr.shift());
        } else {
            sortedArray.push(rightArr.shift());
        }
    }

    return [...sortedArray, ...leftArr, ...rightArr];
}

const array = [38, 27, 43, 3, 9, 82, 10];

console.log(mergeSort(array));
