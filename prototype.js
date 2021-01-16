function Phone(brand,price){
    this.brand=brand;
    this.price=price;
}
Phone.prototype.call = function (){
    console.log(`${this.brand} is a phone brand~`);
}
let apple = new Phone("Apple",9999);
apple.call();