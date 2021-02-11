let a: object;
a = {};

a = function () {

};

let b: { name: string };
b = {name: "DeW"};

let c: { name: string, age?: number };
c = {name: "DeW"};
c = {name: "DeW", age: 22};

let d: { name: string, [propName: string]: any };
d = {name: "DeW", age: 22, gender: "male"};

let e:(a:number,b:number)=>number;
e = function (n1:number,n2:number):number{
    return n1 + n2
}

let f:string[];
f = ['1','2','3'];
let h:number[];
h = [1,2,3];
let g:Array<number>;
g = [1,2,3];

/**
 * tuple the fixed array
 **/

let x : [string,string];
x = ["hello","world"];

/*
* enum
**/

let y:{name:string,gender:0|1|-1};
y = {
    name:"DeW",
    gender:1
}


enum Gender{
    Male = 0,
    Female = 1,
    Guy = -1
}

console.log(y.gender === Gender.Male);

let z :{name:string} & {age:number};
z = {name:"DeW",age:22};

//Assert

type myType = 1|2|3;
let asd:myType = 1;