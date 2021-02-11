var a;
var b;
// b = 11; //Error
var person;
person = "male";
person = "female";
// person = 123; //Error
var c;
c = 0;
c = true;
var d; //Equal let d; d type equal any
d = 10;
d = true;
d = "D";
var e;
e = 10;
e = true;
e = "E";
var s;
s = d;
var s1 = 's1';
// s1 = e; //Error typeUnknown is safer than typeAny
s1 = e; //断言Assert
s1 = e;
console.log(s1);
function fn() {
    // return "fn";
}
function fn1() {
    throw new Error("Error~");
}
