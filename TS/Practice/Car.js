var Car = /** @class */ (function () {
    function Car(brand, color) {
        this._brand = brand;
        this._color = color;
    }
    Object.defineProperty(Car.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (value) {
            this._brand = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            var allowedColors = ["blue", "red", 'grey'];
            if (allowedColors.indexOf(value.toLowerCase()) !== -1) {
                this._color = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.getInfo = function () {
        return "Brand: ".concat(this._brand, " Color: ").concat(this._color);
    };
    return Car;
}());
var car1 = new Car('Tesla', 'black');
console.log(car1.getInfo());
car1.color = 'grey';
console.log(car1.getInfo());
