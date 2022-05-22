function comparison()
{
    let num1 = 45;
    let num2 = 45;
    let num3 = 45;
    
    if(num1>num2){
        console.log(`${num1} is largest`);
    }
    else if(num2>num3){
        console.log(`${num2} is largest`);
    }
    else if(num3>num1 && num3>num2){
        console.log(`${num3} is largest`);
    }
    else if(num1==num2 && num2==num3){
        console.log("Number is equal");
    }
    else if((typeof num1) == 'string' || (typeof num2) == 'string' || (typeof num3) == 'string'){
        console.log("Not comparable");
    }
return;
}
comparison();
