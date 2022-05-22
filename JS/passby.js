function Update(obj)
{
    obj.name = "xyz";
    obj.rno = 5;
}

const obj = {
    name : "abc",
    rno : 1
};

console.log("before function call");
console.log(obj.name);
console.log(obj.rno);