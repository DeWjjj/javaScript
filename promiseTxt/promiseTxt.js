const fs = require('fs');
const a = new Promise((resolve, reject) => {
    fs.readFile("./1.txt",(err, data) => {
        if(err){reject(err)}
        resolve(data);
    });
});

a.then(value => {
    return new Promise(((resolve, reject) => {
        fs.readFile("./2.txt",(err, data) => {
            if(err){reject(err)}
            resolve([value, data]);
        });
    }))
}).then(value => {
    return new Promise(((resolve, reject) => {
        fs.readFile("./3.txt",(err, data) => {
            if(err){reject(err)}
            value.push(data);
            resolve(value);
        });
    }))
}).then(value => {
    console.log(value.toString());
})