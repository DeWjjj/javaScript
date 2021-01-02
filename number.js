//diffNum
let intNum=10;
let octalNum=0o70; //56
let hexNum1=0xA; //10
let hexNum2=0x1f; //31
console.log(hexNum1-hexNum2); //-21
//float
let floatNum1=1.1; //1.1
let floatNum2=.2; //0.2
let floatNum3=3.33e2; //333 = 3.33 x 10^2
console.log(floatNum3);
console.log(floatNum1-floatNum2); //0.9000000000000001
//Because,the numbers saved method by IEEE754,The others lang has this problem,ex:go java.
