
function binarySearch(arr, searched){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        let middlePicked = arr[middle];
        
        if(middlePicked === searched){
            return middle;
        } else if (middlePicked < searched){
            left = middle + 1;
        } else if (middlePicked > searched) {
            right = middle - 1; 
        }
    }

    return -1;
}

const sortedArray = [2, 5, 12, 18, 23, 36, 42, 56, 67, 73, 89, 95];

console.log(binarySearch(sortedArray, 2))