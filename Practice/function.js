// function add(n1){
//     return n1*n1;
// }
// console.log(add(7));
// console.log(add(9));



// let str = 'Anurag';
// let strArray = str.split('');
// let strArrayRev = strArray.reverse();
// console.log(strArrayRev);



// function SumOfDigits(){
//     let digit = 732;
// let sum = 0;
// temp = digit;
// let rem;

// while(temp>0){
//     rem = temp%10;
//     temp = parseInt(temp/10)
//     sum = sum+rem;
// }
// console.log(sum);

// }

// SumOfDigits();




// let digit = 72;
// let sum = 0;
// temp = digit;
// let rem;

// for(let temp=digit; temp>0; temp = parseInt(temp/10)){
//     rem = temp%10;
//     sum = sum+rem;
// }
// console.log(sum);


// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(palindrome('madam'));


// function astroGuru(job, location, spouse, kids){
//     console.log(`You will be a ${job} in ${location} and married to ${spouse} with no children ${kids}`);
// }
// astroGuru('Web Developer', 'USA', 'Sneha', 2);


// function largerOfTwo(num1, num2, num3){
//     if(num1>num2 && num1>num3){
//         console.log(`${num1} is larger`);
//     }else if(num2>num1 && num2>num3){
//         console.log(`${num2} is larger`);
//     }else if(num3>num1 && num3>num2){
//         console.log(`${num3} is larger`);
//     }else if(num1==num2 && num1==num3){
//         console.log(`${num1}, ${num2} & ${num3} are equal`);
//     }else{
//         console.log(`Number is not comparable`);
//     }
// }
// largerOfTwo(4, 8, 4);


// pallindrome
// let nums = 0;
/*
let result1 = 0;
let rem1;
let temp1;
for(i = 1; i<= 50; i++){
    for(let temp1=121; temp1>0; temp1= parseInt(temp1/10)){
        rem1 = temp1%10;
        result1 = result1*10 + rem1;
    }
    if(result1 === temp1){
        console.log(`Your number was ${temp1} and it converted to ${result1} is pallindrome`);
    }else{
        console.log(`Your number was ${temp1} and it converted to ${result1} is not pallindrome`);
    }
}
*/

let rem1;
// let num;

for(var num = 1; num <= 50; num++){
    let temp1 = num;
    let result1 = 0;

    while(temp1 > 0){
        rem1 = temp1%10
        temp1 = parseInt(temp1/10)
        result1 = result1*10 + rem1;
    }

    if(result1 === num){
        for(var temp = 2; temp < num; temp++){
            if((num % temp) > 0 ){
                console.log("prime no." + num)
            }  
            break    
        }
    }
}
