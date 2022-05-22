// let segregate0_1n2 = (arr) => {
//         let countZero = 0;
//         let countOne = 0; 
//         let countTwo = 0;
//         let n = arr.length;
//     for(let i=0; i<n; i++){
//         if(arr[i] == 0){
//             countZero++
//         } else if(arr[i] == 1){
//             countOne++
//         } else {
//             countTwo++
//         }
//     }
//     for(let i=0; i<countZero; i++){
//         arr[i] = 0;
//     }
//     for(let i=countZero; i<countZero+countOne; i++){
//         arr[i] = 1;
//     }
//     for(let i=countZero+countOne; i<n; i++){
//         arr[i] = 2;
//     }
//     return arr;
// }
// let arr = [1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0];
// console.log(segregate0_1n2(arr));

//Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

let sort0_1n2 = (arr) => {
    let l = 0;
    let m = 0;
    let h = n-1;
    let temp;

    while(m<=h){
        for(let i=0; i<n; i++){
            if(arr[m] === 0){
                temp = arr[l] 
                arr[l] = arr[m]
                arr[m] = temp;
                l++
                m++
            } else if(arr[m] === 1){
                m++
            } else {
                temp = arr[m]
                arr[m] = arr[h]
                arr[h] = temp;
                h--
            }
        }
    }
}

function printVal(arr, n){
    for(let i=0; i<n; i++){
        console.log(arr[i])
    }
}
let arr = [1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0];
let n = arr.length;
console.log(sort0_1n2(arr));
printVal(arr, n)