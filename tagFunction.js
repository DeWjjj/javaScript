let a = 6;
let b = 9;

function simpleTag(strings, ... expressions) {

    console.log(strings);
    for(const expression of expressions){
        console.log(expression);
    }
    return 'foobar';
}

let untaggedResult = `${a} + ${b} = ${a + b}`; //6 + 9 = 15
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;

console.log(untaggedResult);
console.log(taggedResult);