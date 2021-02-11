// import {hi} from 'm.js';
let a = 10;
// console.log(hi);
//tsc app.ts -w

let box1 = document.getElementById('box1');
// if (box1 !== null){
//     box1.addEventListener('click',function () {
//         alert('Hello,World~');
//
//     });
// }

box1?.addEventListener('click',function () {
    alert('Hello,World~')
    
})