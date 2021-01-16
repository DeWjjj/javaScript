let s = new Set(['a','b','c','a']);

for(let v of s){
    console.log(v);
}
console.log(s.size);
s.delete('b');
console.log(s);
s.add('e');
console.log(s);
s.clear();
console.log(s);