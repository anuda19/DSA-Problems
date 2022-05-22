let Order = (n) =>
{
    const nums = [];
    for(let i=1;i<=n;i++)
    {
        nums.push(i);
    }
    nums.sort();
    for(let i=0;i<n;i++)
    {
        console.log(nums[i]);
    }
}
let n = 15;
Order(n);
 
