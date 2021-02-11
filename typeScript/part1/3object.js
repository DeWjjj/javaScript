var a;
a = {};
a = function () {
};
var b;
b = { name: "DeW" };
var c;
c = { name: "DeW" };
c = { name: "DeW", age: 22 };
var d;
d = { name: "DeW", age: 22, gender: "male" };
var e;
e = function (n1, n2) {
    return n1 + n2;
};
var f;
f = ['1', '2', '3'];
var h;
h = [1, 2, 3];
var g;
g = [1, 2, 3];
/**
 * tuple the fixed array
 **/
var x;
x = ["hello", "world"];
/*
* enum
**/
var y;
y = {
    name: "DeW",
    gender: 1
};
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Guy"] = -1] = "Guy";
})(Gender || (Gender = {}));
console.log(y.gender === Gender.Male);
var z;
z = { name: "DeW", age: 22 };
var asd = 1;
