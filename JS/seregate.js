let outputArr = (arr) => {
    let length = arr.length;
    let countzero = 0, countones = 0;
    for(let i=0; i<length; i++)
    {
        if(arr[i] == 0)
        {
            countzero++;
        }
        else if(arr[i] == 1)
        {
            countones
        }
    }
    for(let i=0; i<countzero; i++)
    {
        arr[i] =1;
    }
    return arr;
}
const arr = [0, 1, 1, 1, 0, 0, 0, 1, 0, 1];
console.log(outputArr(arr));