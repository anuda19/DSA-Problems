// find the maximum and minimum element in an array
let arr = [7, 1, 6, 4, 56, 45, 67]
// let smallest = arr[0];
// let max = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(smallest > arr[i]){
//         smallest = arr[i]
//     } else if(max < arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max);
// console.log(smallest);


function minMax(arr, n){
    if(n == 1){
        minmax.min = arr[0];
        minmax.max = arr[0];
        return minmax;
    }
    if(arr[0] > arr[1]){
        minmax.min = arr[1];
        minmax.max = arr[0];
    } else {
        minmax.max = arr[1];
        minmax.min = arr[0];
    }
    for(i=2; i<arr.length; i++){
        if(arr[1] > minmax.max){
            minmax.max = arr[i];
        } else {
            minmax.min = arr[i];
        }
    }
    return minmax;
}
let minmax = new Array();
let i;
// let max;
// let min;
let arr_size = 6;
minmax = minMax(arr, arr_size);
console.log(minmax.max);




let arr1 = [8, 7, 9, 4, 2, 6, 1];
    let min1 = arr1[0]
    let max1 = arr1[0]
    for(let i=1; i<arr.length; i++){
        if(max1 < arr1[i]){
            max1 = arr1[i]
        } else if(min1 > arr[i]){
            min1 = arr[i]
        }
    }

// console.log(min1);
// console.log(max1);


const minMaxElement = (arr2, n) =>{
    let minMax = new Array();
    // let min2;
    // let max2;

    //if the array havin only one element
    if(n===1){
        minMax.min2 = arr2[0]
        minMax.max2 = arr2[0]
        return minMax;
    }
    // if the array havng more than one element
    if(arr2[0] > arr2[1]){
        minMax.min2 = arr2[1]
        minMax.max2 = arr2[0]
    } else {
        minMax.min2 = arr2[0]
        minMax.max2 = arr2[1]
    } 
    for(let i=2; i<n; i++){
        if(minMax.max2 < arr2[i]){
            minMax.max2 = arr2[i]
        } else if(minMax.min2 > arr2[i]){
            minMax.min2 = arr2[i]
        }
    }
    return minMax;
}

let arr2 = [8, 7, 90, 4, 21, 6, 12]
let n = arr.length;
minMax = minMaxElement(arr2, n)
console.log(minMax.min2);
console.log(minMax.max2);