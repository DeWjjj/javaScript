class Phone{
    constructor(brand,price) {
        this.brand = brand;
        this.price = price;
    }
    call(){
        console.log(`${this.brand} is a phone brand~`)
    }
}
let oneplus = new Phone("1+",3999);
oneplus.call();