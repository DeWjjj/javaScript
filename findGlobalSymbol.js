let s = Symbol.for('s');
let s1 = Symbol('s1');

console.log(Symbol.keyFor(s)); //s
console.log(Symbol.keyFor(s1)); //undefined
//console.log(Symbol.keyFor(s2)); //Error