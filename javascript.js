let arr1 = [10, 20, 30, 40, 50];
console.log("print:", arr1[0]);
console.log("Get:", arr1[1]);
arr1[0] = 1000;
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i] + " ");
}
let text1 = "Sreesairam";
console.log("Char", text1.charAt(0));
console.log("Char", text1[0]);
console.log("Length:", text1.length);
function fun1(a, b, c) {
  console.log("Addition:", a + b + c);
}
fun1(20, 10, 30);
const fun2 = (a, b, c) => {
  console.log("Addition arrow function:", a + b + c);
};

fun2(10, 200, 30);

const person = {
  name: "Sreesairam",
  marks: 80,
  avg: 90,
};

console.log("Name:", person.name);
console.log("Avg:", person.avg);

const personOne = [
  { id: 1, name: "Ram", age: 19 },
  { id: 2, name: "Krish", age: 30 },
  { id: 3, name: "Arun", age: 31 },
];
console.log("Person", personOne[1].name);
console.log("Print details");
for (let i = 0; i < personOne.length; i++) {
  console.log("Person one", personOne[i].name);
}
personOne.map((i) => {
  console.log("Name", i.name);
});

const arr = [1, 2, 3, 4, 5];
arr.push(50);
// for(let i=0;i<arr.length;i++)
// {
//   console.log(arr[i]+" ");
// }
arr.reverse();
arr.sort();
// arr.pop();
// for(let i=0;i<arr.length;i++)
// {
//   console.log(arr[i]+" ");
// }

let arr2 = [10, 20, 30, 40, 50];
let arr3 = [60, 70, 80, 90, 100];
let arr4 = arr2.concat(arr3);

for (let i = 0; i < arr4.length; i++) {
  console.log("Values:", arr4[i]);
}
