//Take an array of size 10. Calculate sum of all array elements using tail recursion.

function arrSum(array, size, sum=0)
{
    if(size==0)
    return sum;
    return arrSum(array, size-1, sum+array[size-1]);
}

var array = [5, 36, 17, 40];
var size = array.length;
console.log(arrSum(array, size));


// Write a function that takes a string and returns a string palindrome.

function pallindrome(str) {
    var len = str.length;
    var mid = Math.floor(len/2);
    for(var i=0; i<mid; i++){
        if(str[i] !== str[len-1-i]){
            return false;
        }
    }
    return true;
}

function isPallindrome(str){
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPallindrome('level'));
console.log(isPallindrome('levels'));