// Find the first element having a maximum frequency in a string “unacademy”.

// let str = 'unacademy';
// str.split("");
// let map = new Map()
// for(let i=0; i<str.length; i++){
//     if(map.has(str[i]) == false){
//         map.set(str[i], 1)
//     }else {
//         let count = (map.get(str[i]));
//         map.set(str[i], ++count)
//     }
// }
// for([key, value] of map){
//     if(value == 1)                                      {
//         console.log(key);
//     }
// }





//  Write a program to rearrange the elements such like positive numbers shift to the end and negative numbers to the right.

let arr = [2, 3, -2, -1, 4, -5, -20, 7];
let posArr = [];
let negArr = []; 
for(let i=0; i<arr.length; i++){
    if(arr[i] > 0){
        posArr.push(arr[i])
    } else if(arr[i] < 0){
        negArr.push(arr[i])
    }
}
console.log(posArr.concat(negArr))

//Take an array of size 10. Calculate sum of all array elements using tail recursion.
function sumOfArr(a, n, sum=0){
    if(n==0)
        return sum;       
    
    return (a, n-1, sum+a[n-1])
}
let a = [7, 8, 9, 6, 5];
let n = a.length;
console.log(sumOfArr(a, n))


//Target sum pair

let nums = [3, -2, 8, -5, 3, -9];
let len = nums.length;
let x = 3;
for(let i=0; i<len; i++){
    for(let j=i+1; j<len; j++){
        if(nums[i] + nums[j] == x){
            console.log(`${nums[i]} + ${nums[j]} == ${x}`);
        } 
    }
}

// Find the element that occurs once in the array where rest of the element appear twice

let num = [1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 2, 2, 2];
let countZero = 0;
let countOne = 0;
let countTwo = 0;
let segregate0and1 = (num) => {
   for(let i=0; i<num.length; i++){
    if(num[i] == 0){
        countZero++;
    } else if(num[i] == 1){
        countOne++;
    } else if(num[i] == 2){
        countTwo++;
    }
   }
   for(let i=0; i<countZero; i++){
        num[i] = 0;
    }
    for(let i=countZero; i<countOne; i++){
        num[i] = 1;
    }
    for(let i=countOne; i<num.length; i++){
        num[i] = 2;
    }
    return num;
}
console.log(segregate0and1(num));

// find element that occurs once in the array rest of the element appear twice

let number = [2, 7, 3, 4, 3, 2, 4];
let mapValues = new Map();
for(let i=0; i<number.length; i++){
    if(mapValues.has(number[i]) == false){
        mapValues.set(number[i], 1);
    } else {
        let count = (mapValues.get(number[i]))
        mapValues.set(number[i], ++count)
    }
}

console.table(mapValues);

for(let [key, value] of mapValues){
    if(value == 1){
        console.log(key);
    }
}

// Find the smallest element in an array
let nums1 = [3, 4, 5, 6, 7, 9, 1];
let smallest = nums1[0] 
for(let i=0; i<nums1.length; i++){
    if(nums1[i] < smallest){
        smallest = nums1[i];
    }
}
console.log(smallest);

// write a program to rearrange the eklements such like positive numbers shift to the end and negative numbers to teh right
let numbers = [2, -2, -3, 1, -5, 8];
let posArr1 = [];
let negArr1 = [];
for(let i=0; i<numbers.length; i++){
    if(numbers[i] > 0){
        posArr1.push(numbers[i])
    } else if(numbers[i] < 0){
        negArr1.push(numbers[i])
    }
}
console.log(posArr1.concat(negArr1));