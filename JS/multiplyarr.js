
//Multiply each Array elements 

// var arr = [2, 3, 4, 5, 6, 7, 8];
 
//         function multiply() {
//         var pro = 1;
//         for (i = 0; i < arr.length; i++)
//             pro = pro * arr[i];
//         return pro;
//     }
 
    
//        console.log(multiply());


// Sorting Array with id's values

//        Object =[ {
//         Id: 45,
//         Name: 'ram'},
//         {Id: 4,
//         Name: 'raju'},
//         {Id: 90,
//         Name: 'kumar'}];
//         Object.sort();
//         console.log(object);

// var items = [
// {name: 'ram', id: 45},
// {name: 'raju', id: 4},
// { name: 'kumar', id: 90}

// ];

// items.sort(function (a, b) {
//     return a.value - b.value;
// });

// items.sort(function(a, b){
//     var nameA = a.name.toUpperCase();
//     var nameB = b.name.toUpperCase();
//     if(nameA < nameB){
//         return -1;
//     }
//     if(nameA > nameB){
//         return 1;
//     }
//     return 0;
// }); 
//  console.log(items);


 const object = [
    {name: 'ram', id: 45, rno: 5, iq: 152},
    {name: 'raju', id: 4, rno: 15, iq: 169},
    { name: 'kumar', id: 90, rno: 28, iq: 160},
    { name: 'sam', id: 10, rno: 46, iq: 151}
    ];
    
    object.sort((firstItem, secondItem) => firstItem.iq - secondItem.iq);
    console.log(object);



//     var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
//     var arr2 = [5,9,5,7];
// var smallest = arr1[0];

// for(var i=1; i<arr1.length; i++){
//     if(arr1[i] < smallest){
//         smallest = arr1[i];   
//     }
// }
// console.log(smallest);

