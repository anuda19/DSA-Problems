let stringArray = ["a", "b", "c", "d"];

let nums = [1, 2, 3,4, 5, 6];
let arr = [1, true, "a", 2, "&"];
let a = 2;

console.log();
/*
let temp1 =Array.isArray(nums);
console.log(temp1);
let temp2 = Array.isArray(a);
console.log(temp2);
 */

/**
 stringArray[1] = "x";
 for(let i=0; i<stringArray[i]);
 {
     console.log(stringArray[i]);
 }
 */

 // Find the HCF of two number.
let n = 36;
let m = 60;
let hcf;
for(i=0;i<n;i++)
{
    if(n%i == 0 && m%i == 0)
    {
        hcf = i;
    }
}
console.log(`The HCF of ${n} and ${m} is ${hcf}`);


//  Armstrong Number
let num = 153;
let result = 0;
let temp = num;
let rem;

while(temp>0)
{
    rem = temp%10;
    temp = parseInt(temp/10);
    result = result + rem*rem*rem;
}

result === num ? console.log('is an Armstrong number') : console.log('is not an Armstrong number');
    
