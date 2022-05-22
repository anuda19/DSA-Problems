let printSubsequence = (arr, index, tempArr) =>
{
    let length = arr.length;
    if(index == length)
    {
        if(tempArr.length > 0)
        {
            console.log(tempArr)
        }
    }
    else
    {
        printSubsequence(arr, index+1, tempArr);
        tempArr.push(arr[index]);

        printSubsequence(arr, index+1, tempArr);

        tempArr.pop();

    }
}
const arr = [1, 2,];
const tempArr = [];
printSubsequence(arr, 0, tempArr)