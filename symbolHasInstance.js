class A {}
class B extends A{
    // static [Symbol.hasInstance]() {
    //     return false;
    // }
}
let a = new A();
console.log(A[Symbol.hasInstance](a)); //true
console.log(a instanceof A); //true
console.log(B[Symbol.hasInstance](a)); //false
console.log(a instanceof B); //false