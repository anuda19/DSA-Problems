// Using reverse() method 
let arr = [2, 4, 1, 7, 5, 89];
// let revArr = arr.reverse();                 // reverse() method is an inbuilt function which reverse the data
// console.log('Using Reverse Method');
// console.log(revArr);

// Using Decreamented for loop
let temp = [];
for(let i=arr.length-1; i>=0; i--){         // we are trying to start from last index element n here we access last index to first index
    temp.push(arr[i]);                        // using here push() method which push the element in the new array
}
console.log('Using For Loop');
console.log(temp);

// Using For Each 
arr.forEach(element => {                    // forEach is inbuilt function which access every element in the array
    temp.unshift()                          // unshift() method is used to push the element at the end of the array
})
console.log('Reversed by For Each');
console.log(temp);

// Using Swapping method
for(let i=0; i<Math.floor(arr.length/2); i++){              // here we are trying to find the mid value                          
    [arr[i], arr[arr.length-1-i]] = [ arr[arr.length-1-i], arr[i]]   // after finding the mid value we have o traverse half of the element at the end n half at start
}
console.log('Reverse By Swapping');
console.log(arr);