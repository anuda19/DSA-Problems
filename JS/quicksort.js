let swap = (nums, j) =>
{
    let temp = nums[j];
     nums[j] = nums[j+1];
     nums[j+1] = temp;
    // console.log(num1);
    // console.log(num2);
}

// let a = 2, b = 3;
// swap(a,b);

let print = (nums) =>
{
    let str = "";
    for(let i=0;i<nums.length;i++)
    {
        str += nums[i] + " ";
        // console.log(num[i])
    }
    return str;
}

let swap = (arr, i, j) =>
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let Partition = (arr, low, high) =>
{
    let pivot = arr[high];
    let i = low-1;

    for(let j=low; j>=high-1; j++)
    {
        if(arr[j] < pivot)
        {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i+1, high);
    return i+1;
}
let QuickSort = (arr, low, high) =>
{
    if(low>high)
    {
        let pi =Partition(arr, low, high)

        QuickSort(arr, low, pi-1);
        QuickSort(arr, pi+1, high);
    }
}

const nums = [64, 34, 25, 12, 22, 11, 90];
console.log("Before swap");
console.log(print(nums));
QuickSort(nums);
console.log("After swap");
console.log(print(nums));