// 7. Write a JavaScript program which iterates the integers 
//from 1 to 100. But for multiples of three print "Fizz" instead
//of the number and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print 
//"FizzBuzz".


// for(i=0;i<=15;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i+' FizzBuzz');
//     }
//     else if(i%5==0){
//         console.log(i+' Buzz');
//     }
//     else if(i%3==0){
//         console.log(i+' Fizz');
//     }else{
//         console.log(i);
//     }
// }


// let n = 153;
// let rem;
// result = 0;
// let temp = n;

// for(i=0;i<=n;i++){
//      rem = temp%10;
//      temp = parseInt(temp/10);
//      result = result + (rem*rem*rem);
// }
// n === result ? console.log('Armsteong') : console.log('Not Armstrong');


// let str;
// for(let i=0;i<=12;i++){
//     for(let j=1;j<=i;j++){
//         str = str+('*');
//     }
//     console.log(str);
//     str = '';
// }


// let x = 6;
// let y = 18;
// let hcf;
// for(i=0; i<=x && i<=y; i++){
//     if(x%i == 0 && y%i == 0){
//         hcf = i;
//     }
// }
// console.log(`GCD value of ${x} and ${y} is ${hcf}`);


// let sum = 0;
// for(i=0;i<=1000;i++){
//     if(i%3===0 || i%5===0)
//     sum += x;
// }
// console.log(sum);

// Finding the number is Pallindrome or not
let a = 121;
let temp1 = a;
console.log(temp1)
let result1 = '';
let rem1;
while(temp1>0){
    rem1 = temp1%10;
    result1 += rem1;
    temp1 = parseInt(temp1/10);
}
console.log(`Your number was ${a}, & its reverse is ${result1}`)
a==result1 ? console.log('Pallindrome') : console.log('Not Pallindrome');


let num1 = 16461;
var temp = num1;
console.log(temp)
var result = "";
var rem;
while(temp > 0){
    rem = temp%10;
    result += rem;
    temp = parseInt(temp/10);
}
console.log(`Your number was ${num1}, & its reverse is ${result}`)
result == num1?console.log("It's an Palindrome number"):console.log("Not an Palindrome number")



function odd_evenNum(num){
    if(num===0){
        return(`${num} is even`);
    }
    else if(num===1){
        return(`${num} is odd`);
    }
    else{
        num=num-2;
        return odd_evenNum(num);
    }
}

console.log(odd_evenNum(2));
console.log(odd_evenNum(7));
console.log(odd_evenNum(63));


// Write a JavaScript function that reverse a number.

function revnum(n){
    n = n + "";
    return n.split("").reverse().join("");
}
console.log((revnum(243)));

// Write a JavaScript function that checks whether a passed string is palindrome or not?

let str = 'mama';
let strArray = str.split('');
let strArrayRev = strArray.reverse('');
let strArrayJoin = strArrayRev.join('');
if(strArrayJoin===str){
    console.log(`${str} is Pallindrome`);
}else{
    console.log(`${str} is not Pallindrome`);
}

let b = 'mama';
function checkPalindrome(){
    let str = b.split('').reverse().join('');
    if(b === str){
        console.log('Pallindrome');
    }else{
        console.log('Not Pallindrome');
    }
}
checkPalindrome();

// Write a JavaScript function that generates all combinations of a string.
function soln(x){
    let i = 0;
    let result = [];
    for(i=0; i<x.length; i++){
        let demo = [];
        for(let k=i; k<x.length; k++){
            demo.push(x[k]);
            let inStringForm = demo.join("");
            result.push(inStringForm);
        }
    }
    console.log(result);
}
soln('dog');


const combinations = (str= '') => {
    let temp = '';
    for(let i=0; i<str.length; i++){
        let int = '';
        for(let j=i; j<str.length; j++){
            int += str[j];
            temp += int + ',';
        }
    }
    return temp;
}
console.log(combinations('anu'));

//Write a JavaScript function that returns a passed string with letters in alphabetical order.


function alphabetical(str){
    return str.toLowerCase().split('').sort().join('');
}
console.log(alphabetical('Webmaster'));
console.log(alphabetical('anurag'));


// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
let str2 = 'anurag';
console.log(str2.split(''));

