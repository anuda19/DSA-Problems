let string = 'madam';
let stringArray = string.split('');
let stringArrayRev = stringArray.reverse();
let revString = stringArrayRev.join('');
if(string === revString){
    console.log(`${string} is palindrome`);
}else{
    console.log(`${string} is not palindrome`);
}


let num = 153;
let result = 0;
let temp = num;
let rem;

for(i=0;i<=num;i++)
{
    rem = temp%10;
    temp =  parseInt(temp/10);
    result = result + rem*rem*rem;
}
num === result ? console.log('Armstrong') : console.log('Not Armstrong');


let string1 = 'maadm';
let stringArray1 = string1.split('');
let stringArrayRev1 = stringArray1.reverse('');
let revString1 = stringArray1.join('');
if(string1 == revString1){
    console.log(`${string1} is Pallindrome`);
}else{
    console.log(`${string1} is not Pallindrome`);

}