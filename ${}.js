let name = "DeWjjj";
let helloName = "hello," + name + "!";
console.log(helloName);
let helloName1 = `hello,${name}!`;
console.log(helloName1);
if (helloName == helloName1) {
    console.log("It's same.")
}
let foo = {toString: () => 123};
console.log(`hello,${foo}!`);