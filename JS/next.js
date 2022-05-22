// filter positive numbers
let nums = [2, 4, -2, 4, 6, 7, -9];
let pos_val = nums.filter(function(value){
    return value>=0;
});
console.log(pos_val);

// filter even numbers
let nums1 = [2, 4, -2, 4, 6, 7, -9];
let even_val = nums1.filter(function(values){
    if(values%2==0){
        return values;
    }
});
console.log(even_val);

// map function
let num = [1, 2, 3, 4];
let modifiedArray = num.map(function(i){
    return parseInt(i/2);
});
console.log(modifiedArray);

let n = [1, 2, 3, 4];
n[1] += 10;
console.log(n); 



// pass by value
function DoubleTheValues(num1, num2){
    num1 *= 2;
    num2 *= 2;
    console.log("After Doubling the values");
    console.log(num1);
    console.log(num2);
}
let num1 = 10;
let num2 = 20;
console.log("Initial Values");
console.log(num1);
console.log(num2);
DoubleTheValues(num1, num2);
console.log("After function call");
console.log(num1);
console.log(num2);

// pass by reference
function update(obj){
    obj.name = "xyz";
    obj.rno = 4;
    console.log("Inside Function call");
    console.log(obj.name);
    console.log(obj.rno);
}
const obj = {name : "abc", rno : 1};
console.log("Before Function call");
    console.log(obj.name);
    console.log(obj.rno);
    update(obj);

    console.log("After Function call");
    console.log(obj.name);
    console.log(obj.rno);


    
