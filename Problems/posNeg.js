// Move all the negative elements to one side of the array 
// let arr = [-1, 2, 3, -4, -2, 9, 6, -5]
// let posArr = [];
// let negArr = [];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > 0){
//         posArr.push(arr[i])
//     } else {
//         negArr.push(arr[i])
//     }
// }
// console.log(negArr);
// console.log(posArr);
// console.log(posArr.concat(negArr));


// Now using swapping method
let reArrange = (arr, n) => {
    for(let i=0; i<n; i++){
        if(arr[i] > 0){
            if(i != j){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp;
            }
            j++;
        }
    }
}
function printArr(arr, n){
    for(let i=0; i<n; i++){
        console.log(arr[i]);
    }
}
let j = 0;
let arr = [-1, 2, 3, -4, -2, 9, 6, -5];
let n = arr.length;
reArrange(arr, n);
printArr(arr, n);

console.log(typeof(' 42'));