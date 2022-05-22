nums = [1, 2, 3, 4];
let str = "";  
nums.forEach((num) => str+=num + " ");
console.log(str);

const products = [{name: "product1", price:100}, {name:"product2", price:200}, {name:"produt3", price:300}];
let total = 0;
products.forEach((produt) => total += products.price);
console.log(total);


//1. Write a JavaScript function that reverse a number.
function reverseNum(num){
    num = num + "";
    return num.split().reverse().join();

}
console.log(reverseNum(123));

function pallindromeCheck(str){
    strArray = str.split();
    strArrayRev = strArray.reverse();
    strArrayjoin = strArrayRev.join();
}
console.log(pallindromeCheck('Anurag'));

let charSet = (string) => {
    let str = " ";
    for(i=0; i<string.length; i++){
        for(j=1; j<=string.length; j++){
            if(i != j && i<j){
            let btr = string.substring(i, j);
            str += btr+"\n";
            }
        }
    }
    return str;
}
console.log(charSet('anu'));


let compareFunction = (propertyName) => {
    return function(a, b){
        let x = a[propertyName];
        let y = b[propertyName];

        if(x>y){
            return 1;
        }else if(x<y){
            return -1;
        }else {
            return 0;
        }
    }
}

let products1 = [{name:'Samsung', price:100, isAvailability = true},
                 {name:'Apple', price:200, isAvailability = false},
                 {name:'Google', price:50, isAvailability = true}];
// Sorting by name
products1.sort(compareFunction('name'));
console.table(products1);

products1.sort(compareFunction('price'));
console.table(products1);


