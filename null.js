let testObject = null; //null is a object.
console.log(typeof testObject);
if (null == undefined) {
    console.log("null=undefined.");
}
if (testObject) {
    //This block will not run.
}
if (!testObject) {
    //This block will run.
}
if (age) {
    //This block will not run.
}
if (!age) {
    //This block will run.
}