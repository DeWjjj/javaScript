let a = 6,
    b = 9;

function zipTag(strings, ...expressions) {
    console.log(expressions); //Array
    return strings[0] + expressions.map((e, i) =>
        `${e}${strings[i + 1]}`).join('');
}

let untaggedResult = `${a} + ${b} = ${a + b}`; //6 + 9 = 15
let taggedResult = zipTag`${a} + ${b} = ${a + b}`;

console.log(untaggedResult);
console.log(taggedResult);