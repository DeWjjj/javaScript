class oldPhone {
    constructor(brand,price) {
        this.brand=brand;
        this.price=price;
    }
    call(){
        console.log("oldPhone~");
    }
}

class smartPhone extends oldPhone{
    constructor(brand,price,color,size) {
        super(brand,price);
        this.color=color;
        this.size=size;
    }
    photo(){
        console.log("Take a photo~");
    }
    playGame(){
        console.log("Play a game~");
    }

}
const mi = new smartPhone("XIAOMI",1799,'black','4.7inch');
console.log(mi);