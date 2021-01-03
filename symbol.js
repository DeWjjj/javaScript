let sym = Symbol();
console.log(typeof sym);

let type1sym = Symbol();
let type2sym = Symbol();
console.log(type1sym === type2sym);
//false
let type3sym = Symbol('type3sym');
let type4sym = Symbol('type4sym');
console.log(type3sym === type4sym);
//false
console.log(type1sym);
//Symbol()
console.log(type3sym);
//Symbol(type3sym)

//Ex:global symbol
let globalSymbol = Symbol.for('global');
console.log(typeof globalSymbol);
//symbol
console.log(globalSymbol);
//symbol(global)
let fakeGlobalSymbol = Symbol('global');
console.log(fakeGlobalSymbol === globalSymbol);
//false