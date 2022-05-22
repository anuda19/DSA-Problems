//wirte a javascript program to sum the multiples of 3 and 5 under 1000.
let sum = 0;
for(let i=0; i<1000; i++){
    if(i%3 === 0 || i%5 === 0){
        sum += i;
    }
}
console.log(sum);

// function output(arr, sum1){
//     for(let i=0; i<arr.length; i++){
//         for(j=i+1; j<arr.length; j++){
//             for(k=j+1; k<arr.length; k++){
//                 if(arr[i] + arr[j] + arr[k] == sum1){
//                    console.log(`${arr[i]} + ${arr[j]} + ${arr[k]} = ${sum1}`);
//                     return 1;
//                 }
//             }
//         }
//     }
// }
// // let arr = [1, -2, 3, -3, 2, 7];
// let sum1 = 2;
// if(output(arr, sum1) != 1){
//     console.log('No Such Pair Exist');
// }


let arr1 = [7, 3, 4, 5, 4, 5, 3];
let map = new Map();
for(let i=0; i<arr1.length; i++){
    if(map.has(arr1[i]) == false){  
        map.set(arr1[i], 1);
    }
    else {
        let count = map.get(arr1[i], 1);
        map.set(arr1[i], ++count);
    }
}
console.table(map);

for(let [key, values] of map){
    if(values == 1){
        console.log(key);
    }
}

//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
function plusMinus(arr) {
    // Write your code here
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            countPos++
        } else if(arr[i] < 0){
            countNeg++
        }else if(arr[i] == 0){
            countZero++
        }
    }
}
let countPos = 0;
let countNeg = 0;
let countZero = 0;

let arr = [1, 1, 0, -1, -1]
let temp = arr.length;
console.log(plusMinus(arr));
console.log(countPos/temp);
console.log(countNeg/temp);
console.log(countZero/temp);
