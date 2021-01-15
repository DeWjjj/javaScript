let s1 = Symbol('a'),
    s2 = Symbol('b');
let i = {
    [s1]:'a val',
    [s2]:'a val',
    c:'c val',
    d:'d val'
};
console.log(Object.getOwnPropertySymbols(i));
//[ Symbol(a), Symbol(a) ]
console.log(Object.getOwnPropertyNames(i));
//[ 'c', 'd' ]
console.log(Object.getOwnPropertyDescriptors(i));
console.log(Reflect.ownKeys(i));