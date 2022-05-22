const student = {
    name : "Anurag",
    rol : "CS017",
    branch : "CSE",
    gender : "male",
    start: function() {console.log('Appeared');}
}

const {name, rol, branch, gender, start} = student;
console.log(name, rol, branch, gender, start);
start();