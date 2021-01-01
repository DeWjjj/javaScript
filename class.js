var Car = /** @class */ (function () {
    function Car(carName) {
        this.carName = carName;
    }
    Car.prototype.display = function () {
        console.log("This car name is " + this.carName + "!");
    };
    return Car;
}());
var obj = new Car("Mercedes-Benz");
console.log("This car name is " + obj.carName + "!(method:by console.log)");
obj.display();
