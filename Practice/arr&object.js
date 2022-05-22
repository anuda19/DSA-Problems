// // Sort the array of 0s and 1s
// let segregate0and1 = (arr) => {          //creating a function 
//     let countzero = 0;                   
//     let countone = 0;
//     let n = arr.length;
//     for(i=0; i<n; i++){                 // Running a loop to check how many 0 and 1
//         if(arr[i] == 0){                // Condition check
//             countzero++;                // updating the values
//         }
//         else if(arr[i] == 1) {
//             countone++;
//         }
//     }
//         for(i=0; i<countzero; i++){       // Now running a loop to access zero
//             arr[i] = 0;                    // Updating all the zeros
//         }
//         for(i=countzero; i<n; i++){
//             arr[i] = 1;
//         }
//         return arr;
// }

// let arr = [1, 1, 0, 0, 0, 1, 0, 1, 0, 1];       // Driver Code
// console.log(segregate0and1(arr));               // Calling a function


// Sort the array of 0s, 1s and 2s
let segregate0and1 = (arr) => {          //creating a function 
    let countzero = 0;                   
    let countone = 0;
    let counttwo = 0;
    let n = arr.length;
    for(i=0; i<n; i++){                 // Running a loop to check how many 0 and 1
        if(arr[i] == 0){                // Condition check
            countzero++;                // updating the values
        }
        else if(arr[i] == 1) {
            countone++;
        }
        else if(arr[i] == 2){
            counttwo++;
        }
    }
        for(i=0; i<countzero; i++){       // Now running a loop to access zero
            arr[i] = 0;                    // Updating all the zeros
        }
        for(i=countzero; i<countone; i++){
            arr[i] = 1;
        }
        for(i=countone; i<n; i++){
            arr[i] = 2;
        }
        return arr;
}

let arr = [1, 1, 0, 0, 0, 2, 1, 2, 0, 1, 2, 0, 2, 1];       // Driver Code
console.log(segregate0and1(arr));               // Calling a function



// // Target sum pair in an array

// let sumPair = (arr1, sum) => {   
//     for(i=0; i<arr1.length; i++){       // Running a loop from 0 to arr length 
//         for(j=i+1; j<arr1.length; j++){
//             for(k=j+1; k<arr1.length; k++){
//                 if(arr1[i]+arr1[j] == sum){
//                     console.log(`${arr1[i]} + ${arr1[j]} + ${arr[k]} = ${sum}`);
//                     return 1;
//                 }
//             }
//         }
//     }
// }

// let arr1 = [1, 0, -2, 3, -1, -4, -3, 4];
// let sum = -3;
// if(sumPair(arr1, sum) != 1){
//     console.log('There is no such pair');
// }



// // Find elements that occurs once in the array where rest of the element appear twice

// const num = [7, 3, 4, 5, 4, 5, 3];
// let mapValues = new Map();
// for(i=0; i<num.length; i++){
//     if(mapValues.has(num[i]) == false){
//         mapValues.set(num[i], 1);
//     }else {
//         let count = mapValues.get(num[i]);
//         mapValues.set(num[i], ++count);
//     }
// }
// console.table(mapValues);




// let pairOfSum = (number, x) => {
//     for(i=0; i<number.length; i++){
//         for(j=i+1; j<number.length; j++){
//             if(number[i]+number[j] == x){
//                 console.log(`${number[i]} + ${number[j]} = ${x}`)
//                 return 1;
//             }
//         }
//     }
// }
// const number = [-1, 0, -2, 4, -3, 5];
// let x = 9;
// if((pairOfSum(number, x)) != 1){
//     console.log("No such Pair");
// }


// Minimum absolute difference

let numbers = [8, 2, 4, 2, 0, 5, 9, 21];
let n = numbers.length;
const min = Math.min(...numbers);
console.log(min);
numbers.sort(function(num1, num2){return num1- num2});
// console.log(numbers);

let output = 0;
// min difference for first element
output = output + Math.abs(numbers[0] - numbers[1]);
// console.log(output);

// min diff for last element
output = output + Math.abs(numbers[n-1] - numbers[n-2]);
// console.log(output);

for(let i=1; i<n-1; i++){
    output += Math.min(Math.abs(numbers[i] - numbers[i-1]), Math.abs(numbers[i] - numbers[i+1]));
    // console.log(output);
}


let twoSum = (nums, target) => {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
}
let nums = [2,7,11,15];
let target = 9;
if(twoSum(nums, target) != 1){
    console.log('No such pair');
}


