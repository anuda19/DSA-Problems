// // Find out the first occurence of x
// let linearSearch = (arr, x) =>{
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]===x)
//         {
//             console.log(`Value ${x} found in index ${i}`);
//             return;
//         }
//     }
//     console.log('Value not found');
// }
// let arr = [5, 6, 8, 98, 21, 65, 35, 64, 16, 5, 21];
// let x = 5;
// linearSearch(arr, x);



// Binary search with Recursion

// let rec = function(arr, x, left, right){
//     if(left>right)
//     return false;
//     let mid = parseInt((l+r)/2);
//     let(arr[mid]===x)
//     return true;
//     if(arr[mid]>x)
//     return rec(arr, x, left, mid-1);
//     else
//     return recursiveFunction(arr, x, mid+1, end);
// }




// Find out the all occurence of x

// let linearSearch = (nums, n) =>{
//     let valueFound = false;
//     for(let i=0;i<nums.length;i++)
//     {
//         if(nums[i]===n)
//         {
//             console.log(`Value ${n} found in index ${i}`);
//             valueFound = true;
//         }
//     }
//     if(valueFound==false)
//     {
//     console.log('Value not found');
//     }
// }
// let nums = [5, 6, 8, 98, 21, 65, 35, 64, 16, 5, 21];
// let n = 5;
// linearSearch(nums, n);


// // Binary Search  
// let binarySearch = (nums, n,) =>{
//     l = 0;
//     r = nums.length-1;
//     let mid;
//     while(r>=l){
//         mid = l + parseInt((r-l)/2);
//         if(nums[mid] == n){
//             console.log(`Value ${n} found in index ${mid}`);
//             return true;
//         }
//         else if(nums[mid] > n){
//             r = mid-1;
//         }
//         else{
//             l = mid+1;
//         }
//     }
// }

// const nums = [5, 6, 8, 9, 21, 35, 47, 64, 86, 95, 121];
// const n = 95;
// if(binarySearch(nums, n) != true)
// {
// console.log("value not found");
// }


// using recursion 

// let binarySearch = (arr, x, l, r) =>
// {
//     let mid;
//     if(r>=l)
//     {
//         mid = l + parseInt((r-l)/2)
//         if(arr[mid] == x)
//         {
//             console.log(`Value ${x} found in index ${mid}`);
//             return true;
//         }
//         else if(arr[mid] > x){
//             return binarySearch(arr, x, l, mid-1);
//         }else{
//             return binarySearch(arr, x, mid+1, r);
//         }
//     }
// }
// const nums = [5, 6, 8, 9, 21, 35, 47, 64, 86, 95, 121];
// const x = 95;
// if(binarySearch(nums, x, 0, nums.length-1) != true)
// {
// console.log("value not found");
// }


// Find the occurence
// let groupElement = (arr) =>
// {
//     let n = arr.length;
//     let count = new Map();
//     for(let i=0;i<n;i++)
//     {
//         if(count.has(arr[i]))
//         {
//             let temp = count.get(arr[i]) + 1;
//             count.set(arr[i], temp);
//         }else{
//             count.set(arr[i], 1);
//         }
//     }
//     const output = [];
//     for(let [key, value] of count)
//     {
//         while(value>0)
//         {
//             output.push(key);
//             value--;
//         }
//     }
//     console.log(output);
// }
// let arr = [5, 6, 8, 9, 5, 35, 47, 5, 86, 9];
// groupElement(arr);




// // ternary search
// let ternarySearch = (arr, x, l, r) =>
// {
//     let mid1, mid2;
//     if(r>=l)
//     {
//         mid1 = l + parseInt((r-l)/3);
//         mid2 = r - parseInt((r-l)/3);
//         if(arr[mid1] == x)
//         {
//             console.log(`value ${x} found at index ${mid1}`);
//             return true;
//         }
//         else if(arr[mid2] == x)
//         {
//             console.log(`value ${x} found at index ${mid2}`);
//             return true;
//         }
//         else if(x<arr[mid1])
//         {
//             return ternarySearch(arr, x, l, mid1-1);
//         }
//         else if(x>arr[mid2])
//         {
//             return ternarySearch(arr, x, mid2+1, r);
//         }
//         else 
//         {
//             return ternarySearch(arr, x, mid1+1, mid2-1);
//         }
//     }
// }


// const nums = [5, 6, 8, 9, 21, 35, 47, 64, 86, 95, 121];
// const x = 121;
// if(ternarySearch(nums, x, 0, nums.length-1) != true)
// {
// console.log("value not found");
// }




function findMean(arr, n)
{
    let sum = 0;
    for(let i=0;i<n;i++)
    {
        sum += arr[i];
        return parseInt(sum/n);
    }
}
let arr = [10, 16, 18, 20];
let n = arr.length;
console.log(findMean(arr, n));
