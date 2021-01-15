let s1 = Symbol.for('a'),
    s2 = Symbol.for('b'),
    s3 = Symbol.for('c'),
    s4 = Symbol.for('d');

let o = {
    [s1]: 'a val'
};
console.log(o);
//{ [Symbol(a)]: 'a val' }
Object.defineProperty(o, s2,{value: 'a val',
enumerable:true});
console.log(Object.getOwnPropertySymbols(o));

Object.defineProperties(o, {
    [s3]: {value: 'c val',enumerable: true},
    [s4]: {value: 'd val',enumerable: true},
});
console.log(o);
//console.log(Object.getOwnPropertySymbols(o));