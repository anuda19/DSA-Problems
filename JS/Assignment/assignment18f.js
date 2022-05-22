// Write a program to find the Kth largest element in 
//the array using quick select.

function kLargest(arr, n, k){
    arr.sort((a,b) => b-a);
    for(i=0; i<k; i++){
        console.log(arr[i] + " ");
    }
}
let arr = [2, 23, 12, 9, 31, 40];
let n = arr.length;
let k = 4;
kLargest(arr, n, k);


//2. Write a program to sort the element in the array by
// descending order using random pivot.


