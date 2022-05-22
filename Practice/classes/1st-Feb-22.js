// Create a program to reverse a string

let reverse = (str) => {
    if(str.length == null || str.length <= 1 || typeof str !== "string") {
        return "Invalid String";
    }
    else {
        let revArray = [];
        for(let i=str.length-1; i>=0; i--) {
            revArray.push(str[i]);
        }
        return revArray.join('');
    }
}

let str = "nitin";
console.log(reverse(str));

let revStr = reverse(str);

if(str==revStr){
    console.log('Pallandrome');
} else {
    console.log('Not Pallandrome');
}


// Fibonacci series
let a = 4;
let b = 5;
let c;
let n = 10;
console.log(a);
console.log(b);
for(let i=0; i<n; i++){
    c = a+b;
    a = b;
    b = c;
    console.log(c);
}

// power of a number

let power = (num, pow) => {
    p = 1;
    for(let i=0; i<pow; i++){
        p *= num;
    }
    return p;
}
console.log(power(2, 5));;

// print all the prime number up to a given number
let isPrime = numbers => {
    for(let i=2; i<numbers; i++){
        if(numbers % i == 0){
            return false;
        }
    }    
    return true;
}
let nums = 30;
for(let i=2; i<nums; i++)
{
    if(isPrime(i) == true)
    {
        console.log(i);
    }
}

// Anagram 
let anagram = (str1, str2) => {
    let length1 = str1.length;
    let length2 = str2.length;
    if(length1!==length2){
        return false;
    }
    let modifiedStr1 = str1.split("").sort().join("");
    let modifiedStr2 = str2.split("").sort().join("");
    console.log(modifiedStr1);
    console.log(modifiedStr2);
    if(modifiedStr1 == modifiedStr2) {
        return true;
    }
    return false;
}
if(anagram("ent", "tean") == true){
    console.log("Anagram")
} else {
    console.log("Not an Anagram")
}

// let str1 = 'hello';
// let str2 = 'llhoe';
// let splittedStr1 = str1.split('');
// let sortedStr1 = splittedStr1.sort();
// let joinedStr1 = sortedStr1.join();
// let splittedStr2 = str2.split('');
// let sortedStr2 = splittedStr2.sort();
// let joinedStr2 = sortedStr2.join();

// if(joinedStr1 == joinedStr2){
//     console.log(`${joinedStr1} and ${joinedStr2} is Anagram`)
// } else {
//     console.log("Not an Anagram");
// }

// print the frequency in a string
let string = 'aaccbbbbaascc';
string.split("");
let map = new Map();

for(let i=0; i<string.length; i++)
{
    if(map.has(string[i]) == false)
    {
        map.set(string[i], 1);
    }
    else 
    {
        let count = map.get(string[i]);
        map.set(string[i], ++count);
    }
}
console.table(map);

for([key, value] of map)
{
    if(value == 1)   
    {
        console.log(key);
    }
}

// subarray wit sum x
let arr = [2, 3, -3, 1, -4, 5];
let x = 0;
for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[i] + arr[j] == x)
        {
            console.log(`${arr[i]} + ${arr[j]} = ${x}`);
        }
    }
}


// shift negative numbers end of the array
const array = [2, 3, 10, -3, 1, -4, 5, -7];
const posArr = []; 
const negArr = [];
for(let i=0; i<array.length; i++)
{
    if(array[i] >= 0)
    {
        posArr.push(array[i]);
    }
    else
    {
        negArr.push(array[i]);
    }
}
console.log(posArr);
console.log(posArr.concat(negArr));

// array rotation

let arr1 = [];
let n = 4;
for(let i=0; i<n; i++)
{
    arr[i] = prompt('Enter value' + (i+1));
}
console.log(arr1);
document.getElementById('heading');