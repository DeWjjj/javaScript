let s1 = Symbol('foo'),
    s2 = Symbol('bar');

let zadasdo = {
    [s1]: 'foo val',
    [s2]: 'bar val',
    baz: 'baz val',
    qux: 'qux val'
};
console.log(Object.getOwnPropertySymbols(o));
console.log(Object.getOwnPropertyDescriptors(o));
console.log(Object.getOwnPropertyNames(o));
console.log(Reflect.ownKeys(o));