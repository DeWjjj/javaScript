let array = [1,2,3];
console.log(array.map((x, y,z)=>`${x}${y} ${z}`));
array.map(function (val,ind,fullVal){
    console.log(`${val}${ind} ${fullVal}`)
})
//map(function(val,index,fullVal){}