let digit = 732;
let sum = 0;
temp = digit;
let rem;

while(temp>0){
    rem = temp%10;
    temp = parseInt(temp/10)
    sum = sum+rem;
}
console.log(sum);



let n = 121;
let rem1;
let result = 0;
let temp1 = n;

    while(temp1>0){
        rem1 = temp1%10;
        temp1 = parseInt(temp1/10);
        result = result*10 + rem1;    
        }
     console.log(result);  
    

   


let str = "";
for(let i=5; i>=0; i--){
    for(let j=0; j<=i; j++){
        str += "*";
    }
    str += ("\n");
}
console.log(str);

let str1 = "";
for(let i=5; i>=0; i--){
    for(let j=i; j<=5; j++){
        str1 += " ";
    }
    for(let k=0; k<=2*i; k++){
        str1 += "*";
    }
    str1 += ("\n");
}
console.log(str1);



