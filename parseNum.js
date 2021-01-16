let num = "1234blue";
let num1 = parseInt(num);
console.log(num1); //1234
let num2 = Number(num);
console.log(num2); //NaN
let num3 = parseInt("0xA"); //10
let num4 = parseInt(""); //NaN
let num5 = Number(""); //0
//Example1:parseInt
let num6 = parseInt("OxAF",16); //175
let num7 = parseInt("AF",16); //175
//Example2:parseFloat
let num8 = parseFloat("22.22.22"); //22.22
console.log(num3,num4,num5,num6,num7,num8)

console.log(Math.trunc(3.5)); //3

console.log(Math.sign(100)); //1
console.log(Math.sign(0)); //0
console.log(Math.sign(-2000)); //-1