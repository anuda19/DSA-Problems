// function DoubleTheValues(num1, num2)
// {
//     num1 *= 2;
//     num2 *= 2;
//     console.log("After doubling values");
//     console.log(num1);
//     console.log(num2);

// }
 
// let num1=10;
// let num2=20;
// console.log("Initial Values");
// console.log(num1);
// console.log(num2);
// DoubleTheVales("After");
// console.log(num1);
// console.log(num2);


// Join 
let student = ['S', 'i', 'm', 'r', 'a', 'n'];

console.log(student.join(''));

// Filter
let cities =[{nemw: 'Delhi', population: 65478544}, 
    {name: 'banglore', population: 85475472},
    {name: 'Chennai', population: 25478996},
    {name: 'Lucknow', population: 25469632}];

    // console.log(cities.filter(city => city.population < 30000000))
    console.log(cities.map(city => city.population * 2)) 



