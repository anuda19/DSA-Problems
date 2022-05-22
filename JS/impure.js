// const arr = [1, 2, 3, 4, 555];
// let squareArray = (arr) => {
// for(let i=0;i<arr.length;i++)
// {
//     arr[i] = arr[i] * arr[i];
// }
// }
// squareArray(arr);
// console.log(arr);


let n = 7;
if(n>=0){
    console.log(`${n} is a Positive Number`);
}
else if(n<0){
    console.log(`${n} is negative number`);
}
else if(n == 0){
    console.log(`${n} is Zero`);
}
else{
    console.log(`${n} is not a Number`);
}

let n1 = 5;
switch (true) {
    case n1>0:
    console.log(`${n1} is positive`)    ;
        break;
    case n1<0:
        console.log(`${n1} is negetive`);
        break;
        case n1==0:
            console.log(`${n1} is Zero`);
    default:
       console.log(`${n1} is NAN`);
        
}

let hcf;
let x = 4;
let y = 8;

for(let i = 1; i <= x && i <= y; i++){
    if(x%i == 0 && y%i == 0){
    hcf = i;
}
}
console.log(`HCF value ${x} and ${y} is ${hcf}`);


// pure function
function squareValue(num){
    let square = num*num;
    return square;
}
let num =5;
console.log(squareValue(num));

// impure function
function SquareArrayValue(nums){ 
    for(let i=0; i<nums.length; i++){
        nums[i] = nums[i]*nums[i];
    }
    return nums;
}
const nums = [1, 2, 3, 4];
console.log(nums);
let modifiedArray = SquareArrayValue(nums);
console.log(modifiedArray);


// closure in js
function Counter(){
    let count = 5;
    function IncreaseCountValues(){
        return count++;
    }
    return IncreaseCountValues;
}

let c = Counter();
console.log(c());
console.log(c());
console.log(c());
// console.log(c());

// higher order function
function updateValue(num1){
    return num1*5;
}
let num1 = 9;
let f = updateValue;
console.log(f(num1));    


// composibility

function add(nums1, nums2){
    return nums1+nums2;
}
function sub(nums1, nums2){
    return nums1-nums2;
}
let nums1 =2, nums2= 81, nums3=9;
let result = sub(add(nums1, nums2), nums3);
console.log(result);


// Regular function
function volume(l, b, h){
    return l*b*h;
}
let l = 8, b = 7, h = 8;
console.log(volume(l, b, h));

// using currying

function vol(l){
    return function(b){
        return function(h){
            return l*b*h;
        }
    }
}
console.log(vol(l)(b)(h));
