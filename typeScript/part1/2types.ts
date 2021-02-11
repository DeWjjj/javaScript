let a: string;
let b: 10;
// b = 11; //Error

let person: "male" | "female";
person = "male";
person = "female";
// person = 123; //Error

let c: boolean | number;
c = 0;
c = true;

let d: any; //Equal let d; d type equal any
d = 10;
d = true;
d = "D";

let e: unknown;
e = 10;
e = true;
e = "E";

let s: string;
s = d;

let s1 = 's1';
// s1 = e; //Error typeUnknown is safer than typeAny

s1 = e as string; //断言Assert
s1 = <string>e;
console.log(s1)

function fn(): void {
    // return "fn";
}

function fn1(): never {
    throw new Error("Error~")
}