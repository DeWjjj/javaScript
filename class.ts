class Car {
    carName: string;

    constructor(carName: string) {
        this.carName = carName
    }
    display():void{
        console.log("This car name is "+this.carName+"!")
    }
}
var obj = new Car("Mercedes-Benz")
console.log("This car name is "+obj.carName+"!(method:by console.log)")
obj.display()