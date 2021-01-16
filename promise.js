const fs = require('fs')
const p = new Promise(function (resolve, reject){
    fs.readFile("./promise.txt",((err, data) => {
        if(err){
            reject(err)
        }
        resolve(data);
    }))
})
p.then(function (value){
    console.log(value.toString());
})