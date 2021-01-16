const a = {
    classNum : "1,2",
    className : [
        "一班",
        "二班",
    ],
    [Symbol.iterator](){
        let index = 0;
        return {
            next:() => {
                if(index<this.classNum.length) {
                    const result =  {value:this.classNum[index],done:false};
                    index++
                    return result;
                }else{
                    return {value: undefined,done:true};
                }
            }
        }
    }

}
for(let message of a){
    console.log(message)
}