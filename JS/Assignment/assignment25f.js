function countRotations(arr, n){
    let min = arr[0], min_index = -1;
    for(let i=0; i<n; i++){
        if(min>arr[i]){
            min = arr[i];
            min_index = i;
        }
    }
    return min_index;
}

let arr = [18, 34, 12, 4, 7, 29, 1];
let n = arr.length;

console.log(countRotations(arr, n));