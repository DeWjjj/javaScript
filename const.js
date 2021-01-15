const age = 22;
//age = 18;//TypeError: Assignment to constant variable.

const name = 'DeWjjj';
//name = 'Jackie';//TypeError: Assignment to constant variable.
if (true) {
    const name = 'Jackie';
    console.log(name); //Jackie
}
console.log(name); //DeWjjj
//Ex1:constClass
const person = {
    name,
    age,
};
person.name = 'Jackie';
person.age = 22;
console.log(person.name); //Jackie
console.log(person.age); //22
//Ex2:constFor
let i = 0;
for (const a = 9; i < 2; i++) {
    console.log(9);
}//9 9
for (const key in {a:1,b:2}) {
    console.log(key);
}//a a
for (const value of [1,2,3,4,5]) {
    console.log(value);
}//1 2 3 4 5