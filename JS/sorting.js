let swap = (nums, j) =>
{
    let temp = nums[j];
     nums[j] = nums[j+1];
     nums[j+1] = temp;
}
let print = (nums) =>
{
    let str = "";
    for(let i=0;i<nums.length;i++)
    {
        str += nums[i] + " ";
    }
    return str;
}

let BubbleSort = (nums) =>
{
    let n = nums.length;
    let count = 0;
    for(let i=0;i<n-1;i++)
    {
        count++; 
        for(let j=0;j<n-i-1;j++)
        {
            if(nums[j] > nums[j+1])
            {
                swap(nums, j);
               
            }
        }
    }
    console.log("total Passes:" + count);
}

const nums = [64, 35, 25, 12, 22, 11, 90];
console.log("Before Swap");
console.log(print(nums));
BubbleSort(nums);
console.log("After Swap");
console.log(print(nums));



// let SelectionSorrt = (nums) =>
// {
//     let min;
//     let n = nums.length;
//     for(let i=0;i<n-1;i++)
//     {
//         min = i;
//         for(let j=i+1;j<n;j++)
//         {
//             if(nums[j]<nums[min])
//             {
//                 min = j;
//             }
//         }
//         swap(nums , min, i);
//     }
// }


// const nums = [64, 35, 25, 12, 22, 11, 90];
// console.log("Before Swap");
// console.log(print(nums));
// BubbleSort(nums);
// console.log("After Swap");
// console.log(print(nums));






// const nums = [64, 35, 25, 12, 22, 11, 90];
// console.log("Before Swap");
// console.log(print(nums));
// BubbleSort(nums);
// console.log("After Swap");
// console.log(print(nums));



// Bubble Sort 

// function bubbleSort(arr)
// {
//     for(var i=0; i<arr.length;i++)
//     {
//         for(var j=0; j<(arr.length-i-1);j++)
//         {
//             if(arr[j]>arr[j+1])
//             {
//                 var temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     console.log(arr);
// }

// var arr=[1, 82, 3, 12, 32, 87];
// bubbleSort(arr);


// Selection Sort


