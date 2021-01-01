for (var i=0;i<5;i++) {
    console.log(i);
}
console.log(i);
for (let a=0;a<5;a++) {
    //console.log(a);
}
//console.log(a);//ReferenceError: a is not defined
for (var b=0;b<5;b++) {
    setTimeout( () =>console.log(b), 0);//5 5 5 5 5
}
// console.log(b);
for (let b=0;b<5;b++) {
    setTimeout( () =>console.log(b), 0);//0 1 2 3 4
}
// console.log(b);