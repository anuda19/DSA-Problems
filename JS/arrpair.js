const arr = [1, 9, -3, 5, -2, -5, 7, -9];
const positiveArr = [];
const negativeArr = [];

for(let i=0;i<arr.length;i++)
{
    if(arr[i] >= 0)
    {
        positiveArr.push(arr[i]);
    }
    else
    {
        negativeArr.push(arr[i]);
    }
}
/*console.log(positiveArr);
console.log(negativeArr);*/
console.log(positiveArr.concat(negativeArr));
