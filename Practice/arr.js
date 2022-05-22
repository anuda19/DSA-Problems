// let arr = ['a', 'b', 'c', 'd'];
// for(i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// for(let i=0; i<=50; i++){
//     if(i%2!==0 && i%3!==0){
//         console.log(i);
//     }
// }

let i;
let rem;
result = 0;
temp = i;
for(let i=0; i<=50; i++){
    while(temp> 0) {
        rem = temp%10;
        temp = parseInt(temp/10);
        result = result*10 + rem;
        if(result == temp){
            console.log(i);
        }
    }
}

nums = [2, 3, 4, 5];
let arr = nums.map(function(i){
    return i*5;
})
console.log(arr);


function squareVal(numbers){
    for(i=0; i<numbers.length; i++){
        numbers[i] = numbers[i] * numbers[i];
    }
    return numbers;
}

let numbers = [1, 2, 3, 4];
console.log(numbers);
let modifiedArray = squareVal(numbers);
console.log(modifiedArray);

// closer in JS

function Counter()
{
    let count = 0;
    function IncreaseCountValues()
    {
        return count++;
    }
    return IncreaseCountValues;
}
let x = Counter();
console.log(x());
console.log(x());
console.log(x());


let arr2 = [3, 9, 4, 8, 7, 5];
function min(){
    return Math.min(...arr2);
}
console.log(min());