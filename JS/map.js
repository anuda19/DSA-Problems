// const arr = [1, 2, 3, 4, 5];


// console.log(arr.map(element => element + 10));


// function x(){
//     var i =1;
//     setTimeout(function() {
//         console.log(i);
//     }, 3000);
//     console.log('Namaste');
// }
// x();

// Pallindrom

let n = 121;
let temp = n;
let result = 0;
while(n != 0){
    result = (result*10)+(n%10);
    n = parseInt(n/10);

}
if(temp==result){
    console.log(`${temp} is Pallindrome`);

}else{
    console.log(`${temp} is Not pallindrome`);
}

let str = 'mam';
let stringArray = str.split('');
let stringArrayRev = stringArray.reverse('');
let stringArrayJoin = stringArray.join('');
if(str === stringArrayJoin){
    console.log(`${str} is pallindrom`);
}else{
    console.log(`${str} Not Pallindrome`);
}

// Armstrong number
let num = 1503;
let rem;
let result1 = 0;
let temp1 = num;
for(i=0;i<=num;i++){
    rem = (temp1%10);
    temp1 = parseInt(temp1/10);
    result1 = result1+(rem*rem*rem);
}
if(num == result1){
    console.log(`${num} is Armstrong`);
}else{
    console.log(`${num} is not Armstrong`);
}