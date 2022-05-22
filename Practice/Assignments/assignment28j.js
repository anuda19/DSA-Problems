// 1. Write a program to multiply the value in the given array and return a result (use array functions)

function multiply(){                        // craeting a function
    let pro = 1;
    for(i=0; i<arr.length; i++)              // running a loop to get access of every element of the array
        pro = pro*arr[i];                     // now we perfoming operation to multiply each element of the array
        return pro;                     // and here we are going to return
}
let arr = [2, 3, 4, 5, 6, 7];                 // driver code
console.log(multiply());                      // calling a function



// 2. Write a JavaScript program to sort by id an array of JavaScript objects.
let Object =[{Id: 45, Name: 'ram'},{Id: 4, Name: 'raju'},{Id: 90, Name: 'kumar'}];

function sortById(propertyName) {               // creating a function
    return function(a, b){                      // retuning a function inside the function
        let x = a[propertyName];                 // here we defining variable to compare two element
        let y = b[propertyName];
        if(x>y){                              // the condition is if the first element is greater than the second then we returning 1
            return 1
        } else if(x<y){                   // the condition is if the first element is lesser than the second then we returning -1
            return -1;
        } else {
            return 0;                      // otherwise in case of both are equal we are returnig 0
        }
    }
}
// sorting by Id
Object.sort(sortById('Id'));                // applying the sorting method and calling the function inside it
console.log(Object);                       // here we printing our sorted value
// sorting by name

Object.sort(sortById('Name'));
console.table(Object);