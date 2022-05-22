function count(arr, low, high){
    if(high>=low){
        let mid = low+parseInt((high-low)/2);
        console.log(mid);
        if((mid==high || arr[mid+1]==0) && arr[mid]==1){
            return mid+1;
        }
        if(arr[mid]==1){
            return count(arr, mid+1, high);
        }
        return count(arr, low, mid-1);
    }
    return 0;
}
let arr = [2, 2, 3, 2, 0, 3, 0, 8];
let n = arr.length;
count(arr, 0, n-1);


let FirstAndLast = (arr, n, x) =>
{
    let first = -1;
    let last = -1;
    for(let i=0; i<n-1;i++){
        
    }
}
