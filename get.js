let example = {
    name : "DeWjjj",
    age : '22',
}
let proxy = new Proxy(example,{
    get(target, propKey) {
        console.log('Getting ' + propKey);
        return target[propKey];
    }
})
proxy.name