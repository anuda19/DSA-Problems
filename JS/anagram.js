let str1 ="ten";
let splittedString = str1.split("");
let sortedString = splittedString.sort();
let joinedString = sortedString.join("");
let string1 = str1.split("").sort().join("");
console.log(string1);
let isAnagram = (str1, str2) =>
{
    let length1 = str1.length;
    let length2 = str2.length;
    if(length1 !== length2)
    {
        console.log("invalid");
        return false;
    }
    let modifiedString1 = str1.split("").sort().join("");
    let modifiedString2 = str2.split("").sort().join("");
    if(modifiedString1 == modifiedString2);
    
    {
    return true;
    }
    return false;
}
if(isAnagram("pen", "met") == true)
{
    console.log("Anagram");
}
else
{
    console.log("Not an Anagram");
}

/*
let str ="valid";
console.log(str);

let splittedStr = str.split("");
console.log(splittedStr);

let sortedStr = splittedStr.sort();
console.log(sortedStr);

let joinedStr = sortedStr.join("");
console.log(joinedStr);
 */



