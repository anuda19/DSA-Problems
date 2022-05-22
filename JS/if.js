// let n = 50;

// if(n > 30)
// {
//     console.log("Number is greater");
// }
// else if(n < 30)
// {
//     console.log("Number is lesser");
// }
// else
// {
//     console.log("Number is Equal");
// }

// Problem 1
let temp = 24;
let isRaining = true;  

if(temp>=20 && temp<=25 && !isRaining){
    console.log("Go out in Park");
}
else if(temp>=18 && temp<=20 && isRaining){
    console.log("Play in School");
}
else{
    console.log("Should not step out of the home");
}

// Problem 2

let marks = 75;
let result = (marks>=40) ? 'Pass' : 'Fail';
console.log(`You ${result} the exam`);
 
// Problem 3

// let n = 23;
// swtch(input)
// {
// case1 : (n>0)
// console.log("Number is PPositive");
// break;
// case2 : (n<0)
// console.log("Number is Negative");
// break;
// default: 
// console.log("Number is Zero");

// }

let hcfValue;
const fn = 18;
const sn = 9;

for(let i=1;i<=fn && i<=sn; i++)
{
    if(fn%i == 0 && sn%i == 0)
    {
        hcfValue = i;
    }
}

console.log(`HCF of ${fn} and ${sn} is ${hcfValue}`);

// let marks = 75;
// let res = (marks>=40) ? 'Pass' :'Fail';
// console.log(`You ${res} Exam`);

let num = 9;
let digit = (num>0) ? 'Positive' : 'Negative';
console.log(`Number is ${digit}`);

