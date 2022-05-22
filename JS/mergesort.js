
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

let Merge = (nums, l, mid, r) =>
{
    let length1 = mid-l+1;
    let length2 = r-mid;

    let Left = new Array(length1);
    let Right = new Array(length2);
    for(let i=0;i<length1;i++)
    {
        Left[i] = nums[l+i];
    }
    for(let j=0; j<length2; j++)
    {
        Right[j] = nums[mid+1+j];
    }

    let i=0, j=0, k=1;
    while(i<length1 && j<length2)
    {
        if(Left[i] <= Right[j])
        {
            nums[k] = Left[i];
            i++;
        }
        else {
            nums[k] = Right[j];
            j++;
        }
        k++;
    }

    while(i<length1)
    {
        nums[k] = Left[i];
        i++;
        k++;
    }
    while(j<length2)
    {
        nums[k] = Right[j];
        j++;
        k++;
    }
   
}

let MergeSort = (nums, l, r) =>
{
    if(l<r)
    {
        let mid = l+ parseInt((r-l)/2);
        MergeSort(nums, l, mid);
        MergeSort(nums, mid+1, r);
        Merge(nums, l, mid, r);
    }
}


const nums = [64, 35, 25, 12, 22, 11, 90];
console.log("Before Swap");
console.log(print(nums));
MergeSort(nums, 0, nums.length - 1);
console.log("After Swap");
console.log(print(nums));