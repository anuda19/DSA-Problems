const stringArray = ["a", "b", "c", "d"];
//homogeneous array
//adding a value to our array - at the end
stringArray.push("x");
console.log(stringArray);
//deleting a value from our array - at the end
stringArray.pop();
console.log(stringArray);
//adding a value to our array - at the start
stringArray.unshift("z");
console.log(stringArray);
//deleting a value from our array - at the start
stringArray.shift();
console.log(stringArray);
//add value "y" at index 1 and before adding delete
// 0 elements from index 1
stringArray.splice(1, 0, "y");
console.log(stringArray);
stringArray.splice(1, 2, "q");