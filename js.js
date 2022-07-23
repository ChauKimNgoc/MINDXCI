// var

// let / const : phụ thuộc nơi khởi tạo (xuất hiện {}: giá trị chỉ có trong {})

// var có hoisting: đưa tất cả khai báo biến về đầu của file đó
var x = 7


// global var
// Scope {}


const newVal = 10; // cannot reassign

// Data Types

// Primitive
String
Number
null
undefined

// Reference
Object
Array


// Arrow function

const getData = () => {} // không có hoisting

function getNewData() {}


// spread & rest
// spread ...
const newObj = {
    name: "kimngoc"
};


// shallow copy (copy tầng 1)
const newObj1 = {...newObj };
newObj1.name = "anhtu";
console.log(newObj); // tuanh

const arr1 = [1, 2, 3]
const arr2 = [...arr1];

// rest
function sum(...args) {
    console.log(args);
}
sum(1, 2, 3, 4, 5);

// Destructuring
const user = {
    name: "kimngoc",
    age: 24,
}

const { name, age } = user;

const students = ["A", "B", "C"];
const [a, b, c] = students;
console.log(a, b);

// Đổi c và d
let c = 1;
let d = 2;

[c, d] = [d, c];
console.log(c, d); // 2,1

// tìm hiểu bind call apply

// array like object