function binarySearch(arr, l, r, x){
    if(r >= l){
        let mid = l + Math.floor((r-l)/2)
        if(arr[mid] == x)
        return mid;
        if(arr[mid] > x)
        return binarySearch(arr, l, mid-1, x);

        return binarySearch(arr, mid+1, r, x);
    }
    return -1;
}

let arr = [2, 4, 6, 12, 23, 34];
let x = 12;
let n = arr.length;
let result = binarySearch(arr, 0, n-1, x);
(result == -1) ? console.log("Element is not in the array") : console.log("Element is present in the array at index " + result)