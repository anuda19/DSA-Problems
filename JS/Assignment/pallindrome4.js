let str = 'mama';
let result1 = 0;
let len = str.length;
let msg = 'It is Pallindrome';
for(let i=0; i<len/2; i++)
{
    if(str[i] != str[len-1-i])
    {
        msg = 'It is not Pallindrome';
    }
}
console.log(`${str}: ${msg}`);

//Check a number is Pallindrome or Not
let num = 12321;
let getNum = num;
let reverse = 0;
while(num != 0)
{
    reverse = (reverse*10)+(num%10);
    num = parseInt(num/10);
}
if(getNum == reverse){
    console.log(reverse+" is Pallindrome");
}
else{
    console.log(reverse+ " is not Pallindrome");
}

// Reverse number

let num1 = 15;
let result = 0;
while(num1 !=0){
    result = (result*10)+(num1%10);
    num1 = parseInt(num1/10);
}
console.log(result);